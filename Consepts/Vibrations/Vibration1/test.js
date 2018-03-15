function myFunction() {
  alert('Hello');
}

function example() {
    // For a single value you can pass in a Number rather than an Array
    navigator.vibrate(500);
  }
  
  function startPattern() {
    // Values at even indices (0, 2, 4, ...) specify vibrations, while the odd
    // indices specify pauses.
    // Vibrate for 400ms 6 times, pausing for 250ms in between each one.
    navigator.vibrate([400, 250, 400, 250, 400, 250, 400]);
  }
  
  function startPattern2() {
    // Values at even indices (0, 2, 4, ...) specify vibrations, while the odd
    // indices specify pauses.
    // Vibrate for 250ms 6 times, pausing for 400ms in between each one.
    navigator.vibrate([250, 400, 250, 400, 250, 400, 250]);
  }
  
  function stopVibrations() {
    // You can also stop an ongoing vibration pattern by specifying a vibration
    // length of zero.
    navigator.vibrate(0);
  }