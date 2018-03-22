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
}

document.getElementById('sendform').addEventListener('submi', function(evt) {
    evt.preventDefault();
    var lamp = "lamp";
    console.log("hehe");

    /* This is where we send the information */
    send(lamp);
})

function send(str) {
    socket.send(str);
}

function logReceived(d) {
    console.log(d);
    fadeNext();
}

/* Write your own functions down here, result of sent data */

function displayDiv() {
    document.getElementById("results").innerHTML= postresult;
    document.getElementById("results").style.background = "green";
}