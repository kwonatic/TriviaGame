
window.onload = function () {
    $("#start").on("click", start);
}
// Timeout audio
// var audio = new Audio("this is where to put audio source");

var clockRunning = false;
var time = 1;
// var q1 = document.getElementById("q1");
// q1.style.display === "block";
$('#q1').hide();
$('#submit').hide();

// gives 1sec time interval after start button is pressed
function start() {
    if (!clockRunning) {
        clockRunning = setInterval(function () {
            count();
        }, 1000);
    }
    $('#q1').show();
    $('#submit').show();

    // var x = document.getElementById("q1");
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
}




function count() {
    console.log("sec");
    time--;
    var timeDisplay = timeConverter(time);
    $('#display').text(timeDisplay);
}



// Taylor's time converter function. Converts 60 into 1.
function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    // var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((t % (1000 * 60)) / 1000);


    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 0) {
        minutes = "00";
    }

    else if (minutes === 0) {
        minutes = "00";
        seconds = "59";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

function submit() {
    console.log("submit")
    var q1Ans = $('input[name=tf]:checked').val();
    if (q1Ans === true) {
    // if ($('input:radio[name="tf"]').is(':checked')) {
        console.log("true checked")
    } else {
        console.log("false checked")
    }



}