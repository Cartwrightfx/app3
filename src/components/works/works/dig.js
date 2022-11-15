function showTime(){
    var date= new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();
    var mo = date.getDate();
    var session = "AM";


    if(h == 0){
        h=12;
}

    if(h > 12){
        h=h - 12;
        session="PM";
    }
    
    if(h < 10){
        h = "0" + h;
}

    if(m < 10){
        m = "0" + m;
    }

    if(s < 10){
        s = "0" + s;
}

    if(ms < 10){
        ms = "0" + ms;
    }

    var time = h + ":" + m + ":" + s + ":" + ms + " " + session;
    var date = " " + mo + " ";
    document.getElementById("myClockDisplay").innerText = time;

}
setInterval(showTime, 10);