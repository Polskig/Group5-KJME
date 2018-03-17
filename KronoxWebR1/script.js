//username
var userEntry = document.querySelector("#username");


//Book Button

function doButton() {
    console.log("book room button pressed");
    var loginInput = document.getElementById('hidden').innerHTML;
  document.getElementById('BNIA305').innerHTML = "Username:" + loginInput;
}

 function updatePage() {
        console.log("username submitted");
      var roomBooked = document.getElementById('roomBooked').innerHTML;
  document.getElementById('BNIA305').innerHTML = "Unavailable";
   alert("You have booked NI:A0305 from 13:15-15:00");
   
  document.getElementById("NIA305a").style.backgroundColor = "#ffb8c8";
   document.getElementById("NIA305b").style.backgroundColor = "#ffb8c8";
  }


