
//time

var countDownDate = new Date("Dec 25, 2023 00:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function () {

var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + " d  "
    document.getElementById("hours").innerHTML = hours + " h  "
    document.getElementById("mins").innerHTML = minutes + " m  "
    document.getElementById("secs").innerHTML = seconds + " s  "

    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }

    function createSnowFlake() {
        let snow_flake = document.createElement("i");
        snow_flake.classList.add("fa-solid");
        snow_flake.classList.add("fa-snowflake");
        snow_flake.classList.add("fa-xs");
        snow_flake.style.left = Math.random() * window.innerWidth + "px";
        snow_flake.style.animationDuration = Math.random() * 3 + 2 + "s";
        snow_flake.style.opacity = Math.random();
        snow_flake.style.fontSize = Math.random() * 10 + 10 + "px";

        document.body.appendChild(snow_flake);
    }
    createSnowFlake();
    createSnowFlake();
    createSnowFlake();
}, 1000);

myfunc();



