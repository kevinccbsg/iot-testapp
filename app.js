const config = require('app-config');
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

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
app.use(express.static(path.join(__dirname, 'build')));

app.get('/oauth', (req, res) => {
  
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
