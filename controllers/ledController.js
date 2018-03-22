const config = require('app-config');
const response = require('../utils/responseHelper');
const clientHTTP = require('./../clientHTTP');

const debug = require('debug')('IOT-APP:ledController');

const client = clientHTTP(config.config.kongOptions);

const setToken = (req) => {
  const contentType = 'application/json';
  const authorization = `Bearer ${req.session.access_token}`;
  return {
    'Content-Type': contentType,
    Authorization: authorization,
  };
};

const ledController = async (req, res) => {
  const { mode } = req.body;
  try {
    const headers = setToken(req);
    debug(headers);
    client.setHeaders(headers);
    const responseLeds = await client.postRequest('/ledapi/leds/22', {
      mode,
    });
    debug('Respuesta correcta cambiado el estado del Led');
    return response(res, 'Updated', 200);
  } catch (err) {
    debug(err);
    return response(res, err, err.status || 500);
  }
};

module.exports = {
  ledController,
};
