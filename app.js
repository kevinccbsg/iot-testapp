const config = require('app-config');
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const {
  oauthController,
  ensureSession,
} = require('./controllers/oauthController');
const api = require('./router/api');

const app = new express();

app.use(compression());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
  secret: config.config.session.secret,
  cookie: config.config.session.cookie,
  resave: config.config.session.resave,
  saveUninitialized: config.config.session.saveUninitialized,
}));


app.get('/', ensureSession, (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api', api);

app.get('/oauth2', oauthController);

app.get('/403', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'build')));



module.exports = app;
