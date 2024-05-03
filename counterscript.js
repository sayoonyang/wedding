
// Set the date we're counting down to
var countDownDate = new Date("Aug 31, 2024 12:30:00").getTime()+ (9 * 60 * 60 * 1000);

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time // adjusted 9 hours
  var now = new Date().getTime() +(9 * 60 * 60 * 1000);

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("dcounter").innerHTML = days + "일 " + hours + "시간 "
  + minutes + "분 " + seconds + "초";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dcounter").innerHTML = "축하해주셔서 감사합니다.";
  }
}, 1000);
