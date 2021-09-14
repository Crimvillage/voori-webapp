var express = require('express');
var app = express();
var routes = require('../src/routes')
var cfg = require('../src/config')
var path = require('path')
var router = express.Router()
var logger = require('morgan')

//app.use(logger)


// parse application/json
app.use(express.json())
//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// View Engine Setup
app.set('views', path.join(__dirname, '../src/views'))
app.set('view engine', 'ejs')



app.use('/', routes);
app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(cfg.private.http_port, () => {
    console.log(`App listening on PORT ${cfg.private.http_port}`);
  });

module.exports = app, router;