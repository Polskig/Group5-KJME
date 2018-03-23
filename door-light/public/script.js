let socket = null;

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

/* Displays feedback for pressed button */
function displayDiv(postResult) {
    document.getElementById("results").innerHTML= postResult;
    document.getElementById("results").style.background = "green";
}