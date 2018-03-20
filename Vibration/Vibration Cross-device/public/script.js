var socket = null;

if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {

  const url = 'ws://' + location.host + '/ws';
  socket = new ReconnectingWebsocket(url);

  socket.onopen = function(evt) {
    console.log('Web socket opened: ' + url);
  };

  socket.onmessage = function(evt) {
    logReceived(evt.data);
    if (evt.data == 'Pattern1') {
      document.getElementById("ruta").style.display = "flex";
    }
  };

  document.getElementById("startPattern1").addEventListener('click', function() {
    send("Pattern1");
    console.log ("hello1");
  });


  document.getElementById("ruta").addEventListener('click', function() {
    document.getElementById("ruta").style.display = "none";
    navigator.vibrate([400, 250, 400, 250, 400]);
  });

  document.getElementById("startPattern2").addEventListener('click', function(evt) {
    send("Pattern2");
  });

  document.getElementById("startPattern3").addEventListener('click', function(evt) {
    send("Pattern1");
  });

}

function send(str) {
  console.log(new Date().toLocaleTimeString() +  '> ' + str);
  socket.send(str);
}

function logReceived(d) {
  document.getElementById('lastMsg').innerHTML = d + '<br />' + document.getElementById('lastMsg').innerHTML;
}