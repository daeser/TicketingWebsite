//Countdown disini
var countDownDate = new Date("February 26, 2024 21:00:00").getTime();


var countdown = setInterval(function() {
  
  var now = new Date().getTime();


  var distance = countDownDate - now;

  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("timer").textContent = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

 
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("timer").textContent = "ONGOING NOW!";
  }
}, 1000);
// =====================================

var countDownDate1 = new Date("November 24, 2024 18:00:00").getTime();
var countdown1 = setInterval(function (m) {
  
  var now1 = new Date().getTime();


  var distance1 = countDownDate1 - now1;

  
  var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);


  document.getElementById("timer1").textContent = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

 
  if (distance1 < 0) {
    clearInterval(countdown);
    document.getElementById("timer1").textContent = "ONGOING NOW!";
  }
}, 1000);
// 
var countDownDate2 = new Date("January 24, 2025 19:00:00").getTime();
var countdown2 = setInterval(function (m) {
  
  var now2 = new Date().getTime();

  var distance2 = countDownDate2 - now2;

  
  var days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);


  document.getElementById("timer2").textContent = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

 
  if (distance1 < 0) {
    clearInterval(countdown);
    document.getElementById("timer2").textContent = "ONGOING NOW!";
  }
}, 1000);


function handleCheckout() {
        alert("Successfully Checked Out !");
        alert("Redirecting to home");
        window.location.href = "home.html";
        // location.reload();
}