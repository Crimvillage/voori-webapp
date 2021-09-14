var jwt = require('./jwt');

var keys = {};
keys.jwt = {}
keys.crypto = jwt.secretKey;
module.exports = keys;


