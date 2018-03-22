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

      vibrate();
    }
    if (evt.data == 'Pattern2') {

      vibrate2();
    }
    if (evt.data == 'Pattern3') {

      vibrate3();
    }
  };

  //Get the elements from startPattern1
  document.getElementById("startPattern1").addEventListener('click', function() {
    send("Pattern1");
    console.log ("hello1");
  });

  function vibrate() {
    window.navigator.vibrate([400, 250, 400, 250, 400]);
  }

  function vibrate2() {
    window.navigator.vibrate([250, 400, 250, 400, 250]);
  }

  function vibrate3() {
    window.navigator.vibrate([750, 50, 750, 50, 750, 50, 750]);
  }



  //Get the elements from startPattern2
  document.getElementById("startPattern2").addEventListener('click', function() {
    send("Pattern2");
    console.log ("hello2");
  });




  document.getElementById("startPattern3").addEventListener('click', function() {
    send("Pattern3");
    console.log ("hello");
  });


}

function send(str) {
  console.log(new Date().toLocaleTimeString() +  '> ' + str);
  socket.send(str);
}

function logReceived(d) {
  document.getElementById('lastMsg').innerHTML = d + '<br />' + document.getElementById('lastMsg').innerHTML;
}