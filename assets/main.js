var sec = document.getElementById("sec");
var min = document.getElementById("min");
var hour = document.getElementById("hour");


setInterval(() => {

    var sec = document.getElementById("sec");
var min = document.getElementById("min");
var hour = document.getElementById("hour");

    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    secondsrotate = 6 * seconds;
    minutesrotate = 6 * minutes;
    hoursrotation = 30 * hours + minutes / 2;

    sec.style.transform = `rotate(${secondsrotate}deg)`;
    min.style.transform = `rotate(${minutesrotate}deg)`;
    hour.style.transform = `rotate(${hoursrotation}deg)`;
}, 1000);