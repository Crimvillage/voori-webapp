var config = require('./config.default.public');
var config = {};
    config.env ="live"
    config.use_env = false
    config.use_env_for_db = false
    
    config.http_port = 8080
    config.https_port = 8447

module.exports = config;
