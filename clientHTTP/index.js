const Client = require('./Client');

const createClient = options => new Client(options);

module.exports = createClient;
