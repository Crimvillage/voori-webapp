var defaultConfig = require('./default/config.default.private.js'); //importing default config values

//different variables for 'cfg.private.*'
var config = {};
config.env="dev"||defaultConfig.env
config.use_env = true ||defaultConfig.use_env
config.http_port = 4000 ||defaultConfig.http_port

config.verbose = true


//exporting config variables for 'cfg.private.*'
module.exports = config;
