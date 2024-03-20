function updateClock() {
    var now = new Date();
    var dayname = now.getDay();
    var month = now.getMonth();
    var date = now.getDate();
    var year = now.getFullYear();
    var hours = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var period = "AM";

    var months = ["Janvary", "fervary", "Marhc", "Aprail", "Mai", "Joon", "Julai", "Agust", "Sitamber", "Uctoober", "November", "Dicember" ];
    var days = ["soonday", "Moonday", "mnagalvar()", "Weednesdaay", "guruvar()", "Friesday", "Saturnday"]; 

    if (hours == 0) hours = 12;
    if (hours > 12) {
        period = "PM";
    }

    // add 0 in the beginning of number if less than 10
    hours = (hours < 10) ? "0" + hours : hours;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? '0' + sec : sec;

    document.querySelector("#dayname").innerHTML = days[dayname];
    document.querySelector("#month").innerHTML = months[month];
    document.querySelector("#daynum").innerHTML = date;
    document.querySelector("#year").innerHTML = year;
    document.querySelector("#hour").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = min;
    document.querySelector("#seconds").innerHTML = sec;
    document.querySelector("#period").innerHTML = period;
}

function intiClock() {
    updateClock();
    window.setInterval(updateClock, 1000); 
}

intiClock();
