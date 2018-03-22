var socket = null;
var postresult = "5 minutes until booking runs out";

if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);


function ready() {
	const url = 'ws://' + location.host + '/ws';
	socket = new ReconnectingWebsocket(url);
	socket.onopen = function(evt) {};
	socket.onmessage = function(evt) {
		logReceived(evt.data);
  };
    /* eeka said you can send smth here */
}

function send(str) {
    socket.send(str);
}

function logReceived(d) {
    console.log('meddelande: ', d);
}

/* Write your own functions down here, result of sent data */

function displayDiv() {
    document.getElementById("results").innerHTML= postresult;
    document.getElementById("results").style.background = "green";
}