function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkHours(h);
    m = checkMinSec(m);
    s = checkMinSec(s);

    function dayOrNight(){
        if(today.getHours < 12){
            return ' AM';
        } else{
            return ' PM'
        }
    }

    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s + dayOrNight() ;
        var t = setTimeout(startTime, 500);
}

function checkHours(h){
    if (h > 12){
        h = h % 12;
        h = h ? h : 12;
        return h;
    }
}

function checkMinSec(i) {

    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;

}

