var socket = null;

if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {
	const url = 'ws://' + location.host + '/ws';
	socket = new ReconnectingWebsocket(url);
	socket.onopen = function(evt) {};
	socket.onmessage = function(evt) {
		logReceived(evt.data);
  };
}

function send(str) {
    socket.send(str);
}

function logReceived(d) {
    console.log('message: ', d);
}

/* Write your own functions down here, result of sent data */

function displayDiv(postResult) {
    document.getElementById("results").innerHTML= postResult;
    document.getElementById("results").style.background = "green";
}