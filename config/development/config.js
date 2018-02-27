module.exports = {
  port: 3002,
  session: {
    secret: 'stta azrisk tcv',
    cookie: { maxAge: 7200000 },
    resave: false,
    saveUninitialized: false,
  },
};
