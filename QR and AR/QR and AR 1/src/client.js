var x;
document.getElementById("close").addEventListener("click", function() {
	document.getElementById("ui").style.display = "none";
	document.getElementById("open").style.visibility = "visible";
});
document.getElementById("open").addEventListener("click", function() {
	document.getElementById("ui").style.display = "flex";
	document.getElementById("open").style.visibility = "hidden";
});
document.getElementById("terrain").addEventListener("change", function() {
	var terrain = document.getElementById("terrain").options[document.getElementById("terrain").selectedIndex].value;
	send(terrain);
});
document.getElementById("marker").addEventListener("change", function() {
	var marker = document.getElementById("marker").options[document.getElementById("marker").selectedIndex].value;
	if (marker == "empty") {
		document.getElementById("color").disabled = true;
		document.getElementById("model").disabled = true;
	} else {
		x = document.getElementById("marker").options[document.getElementById("marker").selectedIndex].value;
		document.getElementById("color").disabled = false;
		document.getElementById("model").disabled = false;
	}
});
document.getElementById("color").addEventListener("change", function() {
	var color = document.getElementById("color").options[document.getElementById("color").selectedIndex].value;
	send(color);
});
document.getElementById("model").addEventListener("change", function() {
	var model = document.getElementById("model").options[document.getElementById("model").selectedIndex].value;
	send(model);
});
var socket = null;
if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {
	const url = 'wss://' + location.host + '/ws';
	socket = new ReconnectingWebsocket(url);
	socket.onmessage = function(evt) {
		if ((evt.data == "grass") || (evt.data == "desert") || (evt.data == "grid") || (evt.data == "urban") || (evt.data == "plain")) {
			document.getElementsByTagName("A-PLANE")[0].setAttribute("src", "https://raw.githubusercontent.com/tanerolcxy/untitled/master/demo/public/lib/" + evt.data + ".jpg");
		} else
		if ((evt.data == "white") || (evt.data == "grey") || (evt.data == "red") || (evt.data == "green") || (evt.data == "blue")) {
			document.getElementById(x).setAttribute("material", "color: " + evt.data);
		} else
		if ((evt.data == "apartment") || (evt.data == "car1") || (evt.data == "car2") || (evt.data == "garage") || (evt.data == "house1") || (evt.data == "house2") || (evt.data == "pool")) {
			document.getElementById(x).setAttribute("obj-model", "obj: url(https://raw.githubusercontent.com/tanerolcxy/untitled/master/demo/public/lib/demo_models/" + evt.data + ".obj)");
		}
	};
}

function send(str) {
	socket.send(str);
}
