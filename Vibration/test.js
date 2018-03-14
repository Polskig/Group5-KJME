/*//canvas

var grabCan = document.querySelector("Canvas");
var can = grabCan.getContext ("2d"); //decides 2d or 3d

//sky color and box
can.beginPath();
can.fillStyle = "#00bfff";
can.fillRect(0,0,750,300)

//water color and box
can.beginPath();
can.fillStyle = "green";
can.fillRect(0,300,750,300);*/

/*function example1() {
   Vibrate for 500ms
  navigator.vibrate([500]);
}*/

function example2() {
    // For a single value you can pass in a Number rather than an Array
    navigator.vibrate(500);
  }
  
  function startPattern() {
    // Values at even indices (0, 2, 4, ...) specify vibrations, while the odd
    // indices specify pauses.
    // Vibrate for 500ms 6 times, pausing for 250ms in between each one.
    navigator.vibrate([400, 250, 400, 250, 400, 250, 400]);
  }
  
  function startPattern2() {
    // Values at even indices (0, 2, 4, ...) specify vibrations, while the odd
    // indices specify pauses.
    // Vibrate for 500ms 6 times, pausing for 250ms in between each one.
    navigator.vibrate([250, 400, 250, 400, 250, 400, 250]);
  }
  
  function stopVibrations() {
    // You can also stop an ongoing vibration pattern by specifying a vibration
    // length of zero.
    navigator.vibrate(0);
  }