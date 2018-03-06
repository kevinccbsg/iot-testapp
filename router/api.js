const Express = require('express');
const { ledController } = require('../controllers/ledController');

const router = Express.Router();

router.post('/led/green', ledController);

module.exports = router;
