const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressWs = require('express-ws');
const five = require('johnny-five');

const ews = expressWs(express());
const app = ews.app;

/* Declaring global variable (6 pins) */
let ledArray;

app.ws('/ws', function (ws, req) {
  ws.on('message', function (msg) {
    const clients = ews.getWss('/ws').clients;

    console.log(new Date().toLocaleTimeString() + '> ' + msg);

    /* Switch case for msg, calls method depending on value of message */
    /* To save code and time :) */
    switch(msg) {
      case 'on':
        start();
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

    clients.forEach(c => {
      c.send(msg);
    });
  });
});

/* Functions for arduino, on, off, fade */
let start = function() {
  ledArray.on();
};

let stop = function() {
  ledArray.off();
};

let fade = function() {
  const timing = 1000;
  let fadeIndex = 0;
  let ledCount = ledArray.length;

  function fadeNext() {
    let candidateIndex = fadeIndex;
    ledArray[fadeIndex].fadeIn(timing);
    
    candidateIndex = (fadeIndex < ledCount - 1) ? fadeIndex + 1 : 0;
    
    fadeIndex = candidateIndex;

    // The method calls itself to continue with next lamp in the sequence 
    ledArray[fadeIndex].fadeOut(timing, fadeNext);
  }

  ledArray.on();
  ledArray[fadeIndex].fadeOut(timing, fadeNext);
};

five.Board().on('ready', function() {
  console.log('Arduino is ready.');

  // Declaring ledArray when board is ready
  ledArray = new five.Leds([11, 10, 9, 6, 5, 3]);
});

app.use(require('middleware-static-livereload')({
  documentRoot: 'public/'
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

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