// Advertisements off Button
var modal = document.getElementById('myModal1');
var btn = document.getElementById("myBtn1");
var span = document.getElementsByClassName("close1")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var modal2 = document.getElementById('myModal2');
var btn = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close2")[0];
btn.onclick = function() {
  modal2.style.display = "block";
}
span.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
// Advertisement Carousel Small 1
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
// Advertisement Carousel Large
var myIndex3 = 0;
carousel3();
function carousel3() {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex3++;
  if (myIndex3 > x.length) {myIndex3 = 1}    
  x[myIndex3-1].style.display = "block";  
  setTimeout(carousel3, 2500); // Change image every 2 seconds
}

// Advertisement Carousel Small 2
var myIndex2 = 0;
carousel2();
function carousel2() {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex2++;
  if (myIndex2 > x.length) {myIndex2 = 1}    
  x[myIndex2-1].style.display = "block";  
  setTimeout(carousel2, 3000); // Change image every 2 seconds
}

// Advertisement Carousel Large
var myIndex3 = 0;
carousel3();
function carousel3() {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex3++;
  if (myIndex3 > x.length) {myIndex3 = 1}    
  x[myIndex3-1].style.display = "block";  
  setTimeout(carousel3, 2500); // Change image every 2 seconds
}

