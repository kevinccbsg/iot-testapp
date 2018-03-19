const config = require('app-config');
const clientHTTP = require('./../clientHTTP');

const debug = require('debug')('IOT-APP:server');

const client = clientHTTP(config.config.kongOptions);

const oauthController = async (req, res) => {
  const code = req.query.code;
  const error = req.query.error;
  const sess = req.session;
  if (error) {
    return res.redirect('/403');
  }
  try {
    const { body } = await client.postRequest(config.config.tokenPath, {
      client_id: config.config.client_id,
      client_secret: config.config.client_secret,
      code,
      grant_type: 'authorization_code',
    });
    debug(body);
    sess.access_token = body.access_token;
    sess.refresh_token = body.refresh_token;
    const accessToken = sess.access_token;
    const tokenType = 'Bearer';
    const contentType = 'application/json';
    const authorization = `${tokenType} ${accessToken}`;
    const headers = { 'Content-Type': contentType, Authorization: authorization };
    client.setHeaders(headers);
    const apiResponse = await client.getRequest('/userapi/whoiam');
    debug('Obtain user');
    debug(apiResponse);
    sess.user = apiResponse.body;
    return res.redirect('/');
  } catch (err) {
    debug('[oauthController] Error');
    debug(err);
    if (err.status === 500) {
      return res.redirect('/500');
    }
    return res.redirect('/403');
  }
};

const ensureSession = (req, res, next) => {
  debug('ensureSession');
  const sess = req.session;
  if (!sess.user) {
    return res.redirect('/403');
  }
  return next();
};

module.exports = {
  oauthController,
  ensureSession,
};
