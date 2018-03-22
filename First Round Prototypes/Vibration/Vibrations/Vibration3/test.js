function myFunction1() {
  document.getElementById("pattern1").innerHTML = "Available";
}

function myFunction2() {
  document.getElementById("pattern2").innerHTML = "Booked/Unavailable";
}

function myFunction3() {
  document.getElementById("pattern3").innerHTML = "You going to be kicked out";
}
  
function startPattern() {
  // Values at even indices (0, 2, 4, ...) specify vibrations, while the odd
  // indices specify pauses.
  // Vibrate for 400ms 6 times, pausing for 250ms in between each one.
  navigator.vibrate([400, 250, 400, 250, 400]);
}

function startPattern2() {
  // Values at even indices (0, 2, 4, ...) specify vibrations, while the odd
  // indices specify pauses.
  // Vibrate for 250ms 6 times, pausing for 400ms in between each one.
  navigator.vibrate([250, 400, 250, 400, 250]);
}

function startPattern3() {
  // Values at even indices (0, 2, 4, ...) specify vibrations, while the odd
  // indices specify pauses.
  // Vibrate for 250ms 6 times, pausing for 400ms in between each one.
  navigator.vibrate([750, 50, 750, 50, 750, 50, 750]);
}