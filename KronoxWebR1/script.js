//username
var userEntry = document.querySelector("#username");

//Heading names
var defaultTime = document.getElementById('default');
var buildingHead = document.getElementById('building');



//Building Buttons


//Niagara Time Buttons
var sched = document.getElementById('sched');
var ni8 = document.getElementById('niagara8');
var ni10 = document.getElementById('niagara10');
var ni13 = document.getElementById('niagara13');
var ni15 = document.getElementById('niagara15');
var ni17 = document.getElementById('niagara17');

  function NI8() {  
       if(ni8.style.display == 'table')
          ni8.style.display = 'none';
       else
          ni8.style.display = 'table';
          sched.style.display = 'none';
    document.getElementById("building").innerHTML = "Niagara 8:15-10:00";
    defaultTime.display = 'none';

    }
  function NI10() {  
       if(ni10.style.display == 'table')
          ni10.style.display = 'none';
       else
          ni10.style.display = 'table';
          sched.style.display = 'none';
    document.getElementById("building").innerHTML = "Niagara 10:15-12:00";
    defaultTime.display = 'none';
    }
  function NI13() {  
       if(ni13.style.display == 'table')
          ni13.style.display = 'none';
       else
          ni13.style.display = 'table';
          sched.style.display = 'none';
    document.getElementById("building").innerHTML = "Niagara 13:15-15:00";
    defaultTime.display = 'none';
    }
  function NI15() {  
       if(ni15.style.display == 'table')
          ni15.style.display = 'none';
       else
          ni15.style.display = 'table';
          sched.style.display = 'none';
    document.getElementById("building").innerHTML = "Niagara 15:15-17:00";
    defaultTime.display = 'none';
    }
  function NI17() {  
       if(ni17.style.display == 'table')
          ni17.style.display = 'none';
       else
          ni17.style.display = 'table';
          sched.style.display = 'none';
    document.getElementById("building").innerHTML = "Niagara 17:15-20:00";
    defaultTime.display = 'none';
    }

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


