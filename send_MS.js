function send_1(){
    document.getElementById('send_1').click();
    var ms = document.getElementById('text').innerHTML;
    if(ms !== ''){
        return null;
    }
    var rbt = document.getElementById('time_p').innerHTML;
    if(rbt !== 'start'){
        var last = document.getElementById('time_p').innerHTML;
        var def = document.getElementById('time').innerHTML;
        var now =  new Date();
        var now_time = now.getTime();
        var ms_time = now_time - last;
        if(ms_time < def){
            return false;
        }
        var final = GET_W();
        if(final == null){
            return null;
        }
        if(!final){
            return null ;
        }
        document.getElementById('text').innerHTML = final;
        document.getElementById('text_1').innerHTML = final;
        var now =  new Date();
        var now_time = now.getTime();
        document.getElementById('time_p').innerHTML = now_time;
        document.getElementById('send_1').click();
        return;
    }
    var final = GET_W();
    if(final == null){
        return null ;
    }
    if(!final){
        return null ;
    }
    document.getElementById('text').innerHTML = final;
    document.getElementById('text_1').innerHTML = final;
    var now =  new Date();
    var now_time = now.getTime();
    document.getElementById('time_p').innerHTML = now_time;
    document.getElementById('send_1').click();
}

setInterval(send_1, 200);
setTimeout(send_1, 500);
var stop = setInterval(send_1, 500);


// function time_ANS(){
//     var stop_1;
//     var tm = document.getElementById('time').innerHTML;
//     alert(tm);
//     send_1(time);
//     document.getElementById('time').innerHTML = time;
//     return true;
//     if(tm == time){
//         return false;
//     }

//     clearInterval(stop_1);
//     var stop_1 = setInterval(send_1, time);
//     document.getElementById('time').innerHTML = time;
//     return true;
// }