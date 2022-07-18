function GET_W(){
    // document.getElementById('low').click();
    // var MY_BOT = 'GFY :)';
    var MY_BOT = 'GOGOLI';
    var mybox;
    mybox = document.getElementById('ali').childNodes.length;
    var count = document.getElementById('Result').innerHTML =  (mybox-6);
    var Last_MS = document.getElementsByClassName('bubbles-date-group')[count-1];
    var Last_MS_1 = document.getElementsByClassName('bubbles-date-group')[count-2];

               var LF = Last_MS.getElementsByClassName('service-msg')[0];
               var LF_us = Last_MS.contains(LF);
               if(LF_us){
                       var left = Last_MS.getElementsByClassName('service-msg')[0].hasChildNodes();
                       if(left){
                               var left_a = Last_MS.getElementsByClassName('service-msg')[0].childNodes[0].hasChildNodes();
                               if(left_a){
                                   var left_b = Last_MS.getElementsByClassName('service-msg')[0].childNodes[0].childNodes[9].hasChildNodes();
                                   if(left_b){
                                       var left_1 = Last_MS.getElementsByClassName('service-msg')[0].childNodes[0].childNodes[9].innerHTML;
                                       if( left_1 == 'ترک گروه '){
                                           var ANS = short_ANS("left");
                                           return ANS;
                                       }
                                   }
                               }

                       }
               }
               
               var JO = Last_MS.getElementsByClassName('service-msg')[0];
               var JO_us = Last_MS.contains(JO);
               if(JO_us){
                       var join = Last_MS.getElementsByClassName('service-msg')[0].hasChildNodes();
                       if(join){
                               var join_a = Last_MS.getElementsByClassName('service-msg')[0].childNodes[0].childNodes[4].hasChildNodes();
                               if(join_a){
                                   var join_1 = Last_MS.getElementsByClassName('service-msg')[0].childNodes[0].childNodes[4].innerHTML;
                                   var join_us = join_1.indexOf("پیوست");
                                   var ANS = short_ANS("welcome");
                                   return ANS;
                               }

                       }
               }
    
    var MS = Last_MS.getElementsByClassName('message')[0];
    var MS_us = Last_MS.contains(MS);
    if(MS_us){

                var MS = Last_MS.getElementsByClassName('voice')[0];
                var MS_us = Last_MS.contains(MS);
                if(MS_us){
                    var ANS = short_ANS("voice");
                    return ANS;
                }
                var MS = Last_MS.getElementsByClassName('peer-title')[0];
                var MS_us = Last_MS.contains(MS);
                if(!MS_us){
                    return false;
                }
                var name = Last_MS.getElementsByClassName('peer-title')[0].innerHTML;
                var value = Last_MS.getElementsByClassName('message')[0].childNodes[0].innerHTML;
                var users = document.getElementById('users');
                var users_length = users.childNodes.length;
                // alert(users_length);
                var mk;
                mk = true;
                var mk_ms;
                mk_ms = true;
                for(var i = 0;i < users_length;i++){
                    var re_ms = users.childNodes[i].hasChildNodes();
                    if(re_ms){
                        var name_ms = users.childNodes[i].getAttribute('name');
                        if(name_ms == name){
                        var mk = false;  
                        var ms_user_length = users.childNodes[i].childNodes.length;
                        var last_ms_user = users.childNodes[i].getElementsByTagName("p")[(ms_user_length-1)].innerHTML;
                        if(last_ms_user == value){
                            mk_ms = false;
                        }
                        if(mk_ms){
                        users.childNodes[i].innerHTML += '<p>'+value+'</p>';
                        }
                        }

                    }
                }
                if(mk){
                    users.innerHTML += '<div name="'+name+'">'+'<p>'+value+'</p>'+'</div>';
                }

                if(name !== MY_BOT){

                       if(value == 'گوگولی خاموش'){
                           document.getElementById('Result_2').innerHTML = 'off';
                            var ANS = short_ANS("off");
                            return ANS;
                       }
                       if(value == 'گوگولی روشن'){
                           var OFFON =document.getElementById('Result_2').innerHTML = 'on';
                            var ANS = short_ANS("on");
                            return ANS;
                       }
                        var OFFON = document.getElementById('Result_2').innerHTML;
                        if(OFFON == 'off'){
                            return false;
                        }
                       
                        // var veri = document.getElementById('num_state').innerHTML;
                        // if(value == veri){
                        //     document.getElementById('num_state_lo').innerHTML = 'off';
                        //     return false;
                        // }


                       if(value == 'گوگولی یاد بگیر'){
                         document.getElementById('type').innerHTML = 'imp';
                         var ANS = short_ANS("imp");
                         return ANS;
                        }
                        if(value == 'گوگولی صحبت کن'){
                            document.getElementById('type').innerHTML = 'us';
                            var ANS = short_ANS("us");
                            return ANS;
                        }

                        var type = document.getElementById('type').innerHTML;
                        if(type == 'us'){
                            return mode_us(name,value,MY_BOT,Last_MS,Last_MS_1);
                        }
                        if(type == 'imp'){
                            return mode_imp(name,value,MY_BOT,Last_MS,Last_MS_1);
                        }
                        



                }
    }
   return false;
}