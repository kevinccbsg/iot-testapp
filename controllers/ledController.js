const config = require('app-config');
const response = require('../utils/responseHelper');
const clientHTTP = require('./../clientHTTP');

const debug = require('debug')('IOT-APP:ledController');

const client = clientHTTP(config.config.kongOptions);

const ledController = async (req, res) => {
  const { payload } = req.body;
  try {
    const response = await client.postRequest('/ledsapi/leds/17', {
      mode: payload.mode,
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
