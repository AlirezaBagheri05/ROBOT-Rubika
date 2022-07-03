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

        var  lines = final.split("\n");
        var lines_re = Array.isArray(lines);
        if(lines_re){
        var count_l =  lines.length;
            for(var i = 0;i < count_l;i++){
                document.getElementById('parts_send').innerHTML += '<p>'+lines[i]+'</p>';
            }

        }else{
            document.getElementById('parts_send').innerHTML += '<p>'+lines+'</p>';
        }
        


       send_2();
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

function send_2(){
    var child1 = document.getElementById('parts_send').childNodes.length;
    if(child1 == 1){
        var final = document.getElementById('parts_send').childNodes[0].innerHTML;

        document.getElementById('text').innerHTML = final;
        document.getElementById('text_1').innerHTML = final;
        var now =  new Date();
        var now_time = now.getTime();
        document.getElementById('time_p').innerHTML = now_time;
        document.getElementById('send_1').click();
    }

    if(child1 > 1){
        for(var i = 0;i < child1;i++){
            var final = document.getElementById('parts_send').childNodes[i].innerHTML;

            document.getElementById('text').innerHTML = final;
            document.getElementById('text_1').innerHTML = final;
            document.getElementById('send_1').click();
        }
        var now =  new Date();
        var now_time = now.getTime();
        document.getElementById('time_p').innerHTML = now_time;
    }

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