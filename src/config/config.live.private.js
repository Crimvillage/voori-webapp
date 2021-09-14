var defaultConfig = require('./default/config.default.private'); //importing default config values


//different variables for 'cfg.private.*'
var config = {};
config.env="live"  ||  defaultConfig.env


//exporting config variables for 'cfg.private.*'
module.exports = config;
