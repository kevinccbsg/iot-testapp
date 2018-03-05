module.exports = {
  port: 3002,
  session: {
    secret: 'stta azrisk tcv',
    cookie: { maxAge: 7200000 },
    resave: false,
    saveUninitialized: false,
  },
  client_id: 'mxDFiUhD2xG0NRNBjXUd87i8iRaS9JPe',
  client_secret: 'h2bHzsp1XnNdxXoOIdO8mPuy87kpfUN7',
  kongOptions: {
    protocol: 'https',
    ip: 'localhost',
    port: 8443,
    strictSSL: false,
  },
  tokenPath: '/userapi/oauth2/token',
};
