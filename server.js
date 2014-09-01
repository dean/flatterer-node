'use strict'

var express = require('express')
  , config  = require('./config.json')
  , favicon = require('serve-favicon')
  , http    = require('http')
  , path    = require('path')

var app = express();

app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(favicon(__dirname + '/static/favicon.ico'));
app.use(express.static(path.join(__dirname, 'static')))

var routes = require('./build/routes/index')(app)

//app.use(express.logger('dev'))
//app.use(express.json())
//app.use(express.urlencoded())
//app.use(express.methodOverride())
//app.use(app.router)

// development only
//if ('development' === app.get('env')) {
//
//  app.use(express.errorHandler())
//}

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
