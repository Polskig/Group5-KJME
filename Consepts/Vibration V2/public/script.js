var socket = null;

if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {
  // Note the resource URL should match the config in app.js
  const url = 'ws://' + location.host + '/ws';
  socket = new ReconnectingWebsocket(url);

  // Connection has been established
  socket.onopen = function(evt) {
    console.log('Web socket opened: ' + url);
  };

  // Received a message
  socket.onmessage = function(evt) {
    console.log(new Date().toLocaleTimeString() + '< ' + evt.data); // Show raw messages as received
    logReceived(evt.data);

    // To convert text back to an object (if it was sent with 'sendObject'):
    //var o = JSON.parse(evt.data);
    //console.log(o);
  };

  document.getElementById("startPattern1").addEventListener('click', function(evt) {
    var a = {
      Available: navigator.vibrate([400, 250, 400, 250, 400])
    };
    startPattern1(a);
  });

  document.getElementById("startPattern2").addEventListener('click', function(evt) {
    var b = {
      Unavailable: navigator.vibrate([250, 400, 250, 400, 250])
    };
    startPattern2(b);
  });

  document.getElementById("startPattern3").addEventListener('click', function(evt) {
    var e = {
      RunningOut: navigator.vibrate([750, 50, 750, 50, 750, 50, 750])
    };
    startPattern3(e);
  });

  /*document.getElementById("startPattern3").addEventListener('click', function(evt) {
    setInterval(startPattern3,10*1000);
    var e = {
      RunningOut: navigator.vibrate([750, 50, 750, 50, 750, 50, 750])
    };
    startPattern3(e);
  });*/
}

function startPattern1(o) {
  // Create a string version of the object
  send(JSON.stringify(o));
}

function startPattern2(p) {
  // Create a string version of the object
  send(JSON.stringify(p));
}

function startPattern3(h) {
  // Create a string version of the object
  send(JSON.stringify(h));
}

function send(str) {
  console.log(new Date().toLocaleTimeString() +  '> ' + str);
  socket.send(str);
}

function logReceived(d) {
  document.getElementById('lastMsg').innerHTML = d + '<br />' + document.getElementById('lastMsg').innerHTML;
}