var socket = null;

if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);



//Niagara Time Buttons
var sched = document.getElementById('sched');
var ni8 = document.getElementById('niagara8');
var ni10 = document.getElementById('niagara10');
var ni13 = document.getElementById('niagara13');
var ni15 = document.getElementById('niagara15');
var ni17 = document.getElementById('niagara17');

  function NI8() {
       if(sched.style.display == 'table' || ni8.style.display == 'table' || ni10.style.display == 'table' || ni15.style.display == 'table'
         || ni17.style.display == 'table')
          ni8.style.display = 'table';
       else
          ni8.style.display = 'table';
          sched.style.display = 'none';
          ni10.style.display = 'none';
          ni15.style.display = 'none';
          ni17.style.display = 'none';

    document.getElementById("building").innerHTML = "Niagara 8:15-10:00";
    }
  function NI10() {
       if(sched.style.display == 'table' || ni8.style.display == 'table' || ni15.style.display == 'table'
         || ni17.style.display == 'table')
          ni10.style.display = 'table';
       else
          ni10.style.display = 'table';
          sched.style.display = 'none';
          ni8.style.display = 'none';
          ni15.style.display = 'none';
          ni17.style.display = 'none';
    document.getElementById("building").innerHTML = "Niagara 10:15-12:00";
    }
    function NI13() {
         if(sched.style.display == 'table' || ni8.style.display == 'table' || ni15.style.display == 'table'
           || ni17.style.display == 'table')
            sched.style.display = 'table';
         else
            ni10.style.display = 'none';
            sched.style.display = 'table';
            ni8.style.display = 'none';
            ni15.style.display = 'none';
            ni17.style.display = 'none';
      document.getElementById("building").innerHTML = "Niagara 13:15-15:00";
      }
  function NI15() {
       if(sched.style.display == 'table' || ni8.style.display == 'table' || ni10.style.display == 'table' || ni15.style.display == 'table'
         || ni17.style.display == 'table')
          ni15.style.display = 'table';
       else
          ni15.style.display = 'table';
          sched.style.display = 'none';
          ni8.style.display = 'none';
          ni10.style.display = 'none';
          ni17.style.display = 'none';
    document.getElementById("building").innerHTML = "Niagara 15:15-17:00";
    }
  function NI17() {
       if(sched.style.display == 'table' || ni8.style.display == 'table' || ni10.style.display == 'table' || ni15.style.display == 'table'
         || ni17.style.display == 'table')
          ni17.style.display = 'table';
       else
          ni17.style.display = 'table';
          sched.style.display = 'none';
          ni8.style.display = 'none';
          ni10.style.display = 'none';
          ni15.style.display = 'none';
    document.getElementById("building").innerHTML = "Niagara 17:15-20:00";
    }

//Book Button


function doButton() {
  var login = document.getElementById('hidden');
  var bookBut = document.getElementById('BNIA305');
  console.log("toggle on");
     if(bookBut.style.display == 'block')
        login.style.display = 'none';
     else
        bookBut.style.display = 'none';
        login.style.display = 'block'
  }


//update page

function updatePage() {
  updatePage.called= false;
  //ni13
console.log("username submitted");
var roomBooked = document.getElementById('roomBooked').innerHTML;
document.getElementById('BNIA305').innerHTML = "Unavailable";
alert("You have booked NI:A0305 from 13:15-15:00");
document.getElementById("NIA305a").style.backgroundColor = "#ffb8c8";
document.getElementById("NIA305b").style.backgroundColor = "#ffb8c8";

}






function ready() {
  // Note the resource URL should match the config in app.js
  const url = 'ws://' + location.host + '/ws';
  socket = new ReconnectingWebsocket(url);

  // Connection has been established
  socket.onopen = function(evt) {
    console.log('Web socket opened: ' + url);
  };

  // Received a message
  socket.onmessage = function(evt) {
    console.log(new Date().toLocaleTimeString() + '< ' + evt.data); // Show raw messages as received
    logReceived(evt.data);

    // To convert text back to an object (if it was sent with 'sendObject'):
    //var o = JSON.parse(evt.data);
    //console.log(o);
  };

  // Demo sending a message
  document.getElementById('sendForm').addEventListener('submit', function(evt) {
    evt.preventDefault();
    var text = "Unavailable";

    // This is where we actually send something
    send(text);
  });


}

function sendObject(o) {
  // Create a string version of the object
  send(JSON.stringify(o));
}

function send(str) {
  console.log(new Date().toLocaleTimeString() +  '> ' + str);
  socket.send(str);
}

function logReceived(d) {
  var leftRed = updatePage();
  document.getElementById('NIA305b').innerHTML = d + '<br />' + leftRed;
}
