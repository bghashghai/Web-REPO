let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let images = ["monday.jpg", "tuesday.jpg", "wednesday.jpg", "thursday.jpg", "friday.jpg", "saturday.jpg", "sunday.jpg"];
let prevday = "Monday";

for(i=0; i<document.getElementsByClassName("weekday").length; i++){
  document.getElementsByClassName("weekday")[i].innerHTML = "<h2>" + weekdays[i] + "</h2>";

  document.getElementsByClassName("weekday")[i].addEventListener('click', setActive, false);

  document.getElementsByClassName("weekday")[i].id = weekdays[i];
}

document.getElementById("Monday").classList.toggle('active');
document.getElementById("image").innerHTML = "<img src= 'assets/" + images[0] + "' >";

function setActive(e){


  prevday = document.getElementsByClassName("active")[0].id;
  console.log("previous day: " + prevday);
  if(prevday != undefined){
    document.getElementById(prevday).classList.toggle("active");
    document.getElementById(prevday +"menu").style.display = "none";
  }


  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle("active");
  }else{

    e.target.classList.toggle("active");
  }

  day = document.getElementsByClassName('active')[0].id;
  console.log(day);
  document.getElementById(day +"menu").style.display = "block";
  document.getElementById('image').innerHTML = "<img src='assets/" + day + ".jpg' >";
}
