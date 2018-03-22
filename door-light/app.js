var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressWs = require('express-ws');
var five = require('johnny-five');

var ews = expressWs(express());
var app = ews.app;

// Set up the '/ws' resource to handle web socket connections
app.ws('/ws', function (ws, req) {
  // A message has been received from a client
  ws.on('message', function (msg) {
    var clients = ews.getWss('/ws').clients;
    // Debug print it

    console.log(new Date().toLocaleTimeString() + '> ' + msg);

    switch(msg) {
      case 'on':
        blink();
        break;
      case 'off':
        stop();
        break;
      case 'fade':
        fade();
        break;
      default:
        console.log('switch case defaulted');
        break;
    }

    // Broadcast it to all other clients
    clients.forEach(c => {
      c.send(msg);
    });
  });
});

let blink = function() {
  const led = new five.Leds([11, 10, 9, 6, 5, 3]);
  led.on();
};

let stop = function() {
  const led = new five.Leds([11, 10, 9, 6, 5, 3]);
  led.off();
};

let fade = function() {
  const leds = new five.Leds([11, 10, 9, 6, 5, 3]);
  const timing = 1000;
  var fadeIndex = 0;
  var ledCount = leds.length;

  function fadeNext() {
    var candidateIndex = fadeIndex;
    leds[fadeIndex].fadeIn(timing);
    
    candidateIndex = (fadeIndex < ledCount - 1) ? fadeIndex + 1 : 0;
    
    fadeIndex = candidateIndex;

    leds[fadeIndex].fadeOut(timing, fadeNext);
  }

  leds.on();
  leds[fadeIndex].fadeOut(timing, fadeNext);
};

five.Board().on('ready', function() {
  console.log('Arduino is ready.');
});

//var expressWs = require('express-ws')(app);
app.use(require('middleware-static-livereload')({
  documentRoot: 'public/'
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  if (err.status)
    res.sendStatus(err.status);
  else
    res.sendStatus(500);
});

let port = 4040;

app.listen(port);
console.log('Webserver started: http://localhost:' + port);
module.exports = app;