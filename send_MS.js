function send_1(){
    // var num_s_lo = document.getElementById('num_state_lo').innerHTML;
    // if(num_s_lo == 'off'){
    //     return false;
    // }
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
        // var  lines = final.split("\n"); 
        // var count = lines.length;
        // var veri_value = search(final , "AL2P2LA");
        // if(veri_value){
        //     var verify = document.getElementById('parts').childNodes.length;
        //     if(verify > 0){
        //         var parts_p = document.getElementById('parts').childNodes;
        //         for(var i = 0;i < parts_p.length; i++){
        //             var ms_p = document.getElementById("parts");
        //             ms_p.removeChild(ms_p.childNodes[0]);
        //         }
        //     }
        //     for(var i =0;i < count;i++){
        //         document.getElementById('parts').innerHTML += '<p>'+lines[i]+'</p>';
        //     }
        //     var num = Math.floor(Math.random() * 1000);
        //     document.getElementById('num_state').innerHTML = num;
        //     final = 'در حال انجام عملیات ... \n اگر مطمئن هستید عدد زیر را فقط ارسال کنید. \n '+num;
        // }
        document.getElementById('text').innerHTML = final;
        document.getElementById('text_1').innerHTML = final;
        var now =  new Date();
        var now_time = now.getTime();
        document.getElementById('time_p').innerHTML = now_time;
        document.getElementById('send_1').click();
        return;
    }
    
    var final = formatchat('start');
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
    document.getElementById('text').innerHTML = "🚶";
    document.getElementById('text_1').innerHTML = "🚶";
    var now =  new Date();
    var now_time = now.getTime();
    document.getElementById('time_p').innerHTML = now_time;
    document.getElementById('send_1').click();
}



//  setInterval(send_1, 500);

// setTimeout(send_1, 500);
// setTimeout(send_2_big_m, 500);

// var stop2 = setInterval(send_2, 300000);
// setInterval(send_2_big_m, 500);
//var stop1 = setTimeout(send_1, 500);
//var stop = setInterval(send_1, 500);


// var myInterval = setInterval(function(){console.log("mmk")}, 2000);

// clearInterval(stop1); //stop that interval




// function send_2_big_m(){
//     var num_s_lo = document.getElementById('num_state_lo').innerHTML;
//     if(num_s_lo !== 'off'){
//         return false;
//     }
//     document.getElementById('send_1').click();
//     var last = document.getElementById('time_p').innerHTML;
//     var now =  new Date();
//     var now_time = now.getTime();
//     var ms_time = now_time - last;
//     if(ms_time < 1000){
//         return false;
//     }
//     var end_f =  document.getElementById('parts').childElementCount;
//     if(end_f == 0){
//         document.getElementById('num_state_lo').innerHTML = 'on';
//         return;
//     }
//     var final =  document.getElementById('parts').childNodes[0].innerHTML;

//     document.getElementById('text').innerHTML = final;
//     document.getElementById('text_1').innerHTML = final;
//     var now =  new Date();
//     var now_time = now.getTime();
//     document.getElementById('time_p').innerHTML = now_time;
//     document.getElementById('send_1').click();
//     var ms_p = document.getElementById("parts");
//     ms_p.removeChild(ms_p.childNodes[0]);
// }
// setInterval(send_2_big_m, 200);

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