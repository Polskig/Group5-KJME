var socket = null;

if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {

  const url = 'ws://' + location.host + '/ws';
  socket = new ReconnectingWebsocket(url);

  //get the square to dispaly on screen
  socket.onmessage = function(evt) {
    logReceived(evt.data);
    if (evt.data == 'Pattern1') {
      document.getElementById("ruta1").style.display = "flex";
    }
    if (evt.data == 'Pattern2') {
      document.getElementById("ruta2").style.display = "flex";
    }
    if (evt.data == 'Pattern3') {
      document.getElementById("ruta3").style.display = "flex";
    }
  };

  //Get the elements from startPattern1
  document.getElementById("startPattern1").addEventListener('click', function() {
    send("Pattern1");
    console.log ("hello1");
  });

  //adds so that when you press the square you get the vibration to work on the phone
  document.getElementById("ruta1").addEventListener('click', function() {
    document.getElementById("ruta1").style.display = "none";
    navigator.vibrate([400, 250, 400, 250, 400]);
  });



  //Get the elements from startPattern2
  document.getElementById("startPattern2").addEventListener('click', function() {
    send("Pattern2");
    console.log ("hello2");
  });

  //adds so that when you press the square you get the vibration to work on the phone
  document.getElementById("ruta2").addEventListener('click', function() {
    document.getElementById("ruta2").style.display = "none";
    navigator.vibrate([250, 400, 250, 400, 250]);
  });



  document.getElementById("startPattern3").addEventListener('click', function() {
    send("Pattern3");
    console.log ("hello");
  });

  //adds so that when you press the square you get the vibration to work on the phone
  document.getElementById("ruta3").addEventListener('click', function() {
    document.getElementById("ruta3").style.display = "none";
    navigator.vibrate([750, 50, 750, 50, 750, 50, 750]);
  });

}

function send(str) {
  console.log(new Date().toLocaleTimeString() +  '> ' + str);
  socket.send(str);
}

function logReceived(d) {
  document.getElementById('lastMsg').innerHTML = d + '<br />' + document.getElementById('lastMsg').innerHTML;
}