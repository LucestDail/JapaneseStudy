var time = 300;
var min = "";
var sec = "";
var timer = setInterval(function() {
    min = parseInt(time/60);
    sec = time%60;
    document.getElementById("timer").innerHTML = min + ":" + sec;
    time--;
    if(time < 0){
        clearInterval(timer);
        document.getElementById("timer").innerHTML="시간초과입니다";
    }
}, 1000);