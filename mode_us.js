function mode_us(name,value,MY_BOT,Last_MS,Last_MS_1){

    var person = document.getElementById('users_person');
    var person_veri = person.childElementCount;
    if(person_veri !== '0'){
        var persons = person.childNodes;
        var count = persons.length;
        for(var i=0;i < count;i++){
            var name_person = persons[i].getAttribute('name');
            if(name_person == name){
                var name_us = persons[i].childNodes[0].innerHTML;
                var type_us = persons[i].childNodes[1].innerHTML;
                var name_base = name;
                return know_preson(name_us,value,MY_BOT,Last_MS,Last_MS_1,type_us,name_base);
            }
        }
        return unknow_person(name,value,MY_BOT,Last_MS,Last_MS_1);
    }
    return unknow_person(name,value,MY_BOT,Last_MS,Last_MS_1);
}

function know_preson(name,value,MY_BOT,Last_MS,Last_MS_1,type_us,name_base){
    if(value == 'منو از حافظت پاک کن'){

         var person = document.getElementById('users_person');
        var person_veri = person.childElementCount;
        if(person_veri !== '0'){
            var persons = person.childNodes;
            var count = persons.length;
            for(var i=0;i < count;i++){
                var name_person = persons[i].getAttribute('name');
                if(name_person == name_base){
                    person.removeChild(person.childNodes[i]);
                    var ANS = short_ANS('unknow')+'\n\n';
                    ANS += 'اسمم بهار دخترم ⓵\nاسمم مهدی پسرم ⓶';
                    return formatchat('validate',ANS);
                }
            }
           
        }
        
    }
    if(value == 'حالت هوشمند خاموش'){
        document.getElementById('mood').innerHTML = 'off';
         var ANS = short_ANS("off_mood");
         return formatchat('state',ANS);
    }
    if(value == 'حالت هوشمند روشن'){
        var OFFON =document.getElementById('mood').innerHTML = 'on';
         var ANS = short_ANS("on_mood");
         return formatchat('state',ANS);
    }
   var ans = search(value , 'حالت ارام');
   if(ans){
        var t = 't';
        var pos_1 = value.indexOf(t);
        var pos_2 = value.lastIndexOf(t);
        var time_n = value.substring((pos_1+1),pos_2);
        document.getElementById('time').innerHTML = time_n;
        var ANS = short_ANS("time");
        return formatchat('state',ANS);
   }
    var ans = search(value , 'ربات');
    var ans_1 = search(value , 'بات');
    var ans_2 = search(value , 'گاگولی');
   if(ans || ans_1 || ans_2){
        var ANS =  short_ANS(type_us)+'\n';
        ANS +=  message_reply(value);
        return ANS;
   }
   var ans = search(value , 'راهنما');
   if(ans){
           var ANS = Help_GOGOLI();
           return '______ #Help' + '\n'+ANS;
   }
   
   ans = search(value , 'فال' );
   if(ans){
           var FAl = Game_FAl();
           var ANS = name +" "+ 'جونم' + ' '+"اینم فالی که برات گرفتم"+" \n\n "+FAl;
           return formatchat('Omen',ANS);
   }   
   ans = search(value , 'اعتراف' );
   if(ans){
           var ETR = Game_ETR();
           var ANS = name +" "+ 'جونم' + ' '+"اینم ی اعتراف از ی بنده خدا"+" \n\n "+ETR;
           return formatchat('Confess',ANS);
   }
   ans = search(value , 'چالش' );
   if(ans){
           var CHL = Game_CHL();
           var ANS = name+" "+"جونم\n\n"+CHL;
           return formatchat('Challenge',ANS);
   }
   
   
   ans = search(value , 'تاریخ');
   if(ans){
        const egDateTime = new Intl.DateTimeFormat("eg", {
            weekday: "long",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            timeZoneName: "short"
          }).format;
          const now = Date.now();
        var typeeg = egDateTime(now);
        const faDateTime = new Intl.DateTimeFormat("fa", {
            weekday: "long",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            timeZoneName: "short"
          }).format;
          const now1 = Date.now();
        var typefa = faDateTime(now1);
        var sh = 'تاریخ شمسی 🌝';
        var ml = 'Gregorian date 🌚';
        // const faDate = new Intl.DateTimeFormat("fa", {
        // weekday: "long",
        // year: "numeric",
        // month: "long",
        // day: "numeric"
        // }).format(date);

        var ANS = sh + '\n' + '\n'+ typefa + '\n' + '\n'+ '______' + '\n' + ml + '\n'  + '\n'+ typeeg;
        
        return formatchat('DATE',ANS);
    }    

   if(value == 'امار' ){
        var users = document.getElementById('users');
        var users_length = users.childNodes.length;
        var ANS = '';
        ANS += 'تعداد پیام هر یک از اعضای فعال گپ ||'+'\n'+'\n';
        var all_ms;
        all_ms = 0;
        for(var i = 0;i < users_length; i++){
            var ref = users.childNodes[i].hasChildNodes();
            if(ref){
                var name_ms = users.childNodes[i].getAttribute('name');
                var person = document.getElementById('users_person');
                var person_veri = person.childElementCount;
                if(person_veri !== '0'){
                    var persons = person.childNodes;
                    var count = persons.length;
                    for(var c=0;c < count;c++){
                        var name_person = persons[c].getAttribute('name');
                        if(name_person == name_ms){
                            var name_us = persons[c].childNodes[0].innerHTML;
                            var type_us = persons[c].childNodes[1].innerHTML;
                            if(type_us == 'دخترم'){
                                name_ms = short_ANS('girl_pass')+' ';
                            }
                            if(type_us == 'پسرم'){
                                name_ms = short_ANS('boy_pass')+' ';
                            }
                            name_ms += name_us;
                        }
                    }
                   }
                var ms_user_length = users.childNodes[i].childNodes.length;
                all_ms += ms_user_length;
                ANS += name_ms + '  :  '+ms_user_length+'\n';
            }
        }
        ANS += '\n'+'⊶'+'تعداد افراد فعال گپ'+' : '+(users_length-1)+'\n';
        ANS += '⊷'+'تعداد کل پیام :'+' '+all_ms;
        return formatchat('Statistics',ANS);
   }      

   ans = search(value , 'بگو');
   if(ans){
        var ANS = value.replace('بگو','');
        ans = search(ANS, 'گوگولی');
        if(ans){
            ANS = ANS.replace('گوگولی','');
            return ANS;
        }
        return ANS;
   }   
   
var Reply = Last_MS.getElementsByClassName('reply-content')[0];
var submit = Last_MS.contains(Reply);
if(submit ){
        var US_ME =Last_MS.getElementsByClassName('peer-title')[1].innerHTML;
        if(US_ME == MY_BOT){
            var ANS =  message_reply(value);
            return ANS;
        }else{
            ans = search(value , 'گوگولی');
            if(ans){
                ans = search(value , 'اسم');
                if(ans){
                    var ANS = Last_MS.getElementsByClassName('peer-title')[1].innerHTML;
                    return ANS;
                }
            }
            // ans = search(value , 'گوگولی');
            // if(ans){
            //     ans = search(value , 'امارش');
            //     if(ans){
            //         var users = document.getElementById('users');
            //         var users_length = users.childNodes.length;
            //         var ANS = '__ #Statistics'+'\n'+'\n'+'AL2P2LA'+'\n';
            //         ANS += ' پیام های'+'  '+US_ME+'\n\n';
            //         var all_ms;
            //         all_ms = 0;
            //         for(var i = 0;i < users_length; i++){
            //             var ref = users.childNodes[i].hasChildNodes();
            //             if(ref){
            //                 var name_ms = users.childNodes[i].getAttribute('name');
            //                 if(name_ms == US_ME){
            //                     var ms_user_length = users.childNodes[i].childNodes.length;
            //                     all_ms += ms_user_length;
            //                     for(var c = 0;c< ms_user_length;c++){
            //                     var ms_s = users.childNodes[i].childNodes[c].innerHTML;
            //                         ANS += c +' : '+ms_s+'\n';
            //                     }
            //                 }
                            
            //             }
            //         }
            //         return ANS;
            //     }
            // }   
            return false;
        }
    }
    
    var mood = document.getElementById('mood').innerHTML;
    if(mood == 'on'){
        var MS_1 = Last_MS_1.getElementsByClassName('message')[0];
            var MS_us_1 = Last_MS_1.contains(MS_1);
            if(MS_us_1){
            var ls_n = Last_MS_1.getElementsByClassName('peer-title')[0].innerHTML;
            if(ls_n == MY_BOT){
                var ANS =  message_reply(value);
                return ANS;
            }
        }
    }

    ans = search(value , 'گوگولی');
    if(ans){
        var ANS =  message_reply(value);
        return ANS;
    }
    

    var ANS = message(value , name);
    return ANS;
}

function unknow_person(name,value,MY_BOT,Last_MS,Last_MS_1){
    if(name == ''){
        return false;
    }
    ans = search(value , 'اسمم');
    if(ans){
        var ans1 = search(value , 'دخترم');
        if(ans1){
            var nikname = value.replace('اسمم','');
            nikname = nikname.replace('دخترم','');
            nikname = nikname.trim();
            document.getElementById('users_person').innerHTML += '<div class="nameBot_user" name="'+name+'"><p>'+nikname+'</p><p>دخترم</p></div>';
            var ANS =  "پس خانومی اسمت"+" "+nikname+" "+'هست'+'\n'+'ثبت شد.';
            return ANS;
        }
        var ans2 = search(value , 'پسرم');
        if(ans2){
            var nikname = value.replace('اسمم','');
            nikname = nikname.replace('پسرم','');
            nikname = nikname.trim();
            document.getElementById('users_person').innerHTML += '<div class="nameBot_user" name="'+name+'"><p>'+nikname+'</p><p>پسرم</p></div>';
            var ANS =  "پس اقایی اسمت"+" "+nikname+" "+ 'هست'+'\n'+'ثبت شد.';
            return ANS;
        }
    }
    
   document.getElementById('users_person').innerHTML += '<div class="nameBot_user" name="'+name+'"><p>'+name+'</p><p></p></div>';
     
}