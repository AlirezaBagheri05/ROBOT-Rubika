function mode_us(name,value,MY_BOT,Last_MS,Last_MS_1){
    if(value == 'حالت هوشمند خاموش'){
        document.getElementById('mood').innerHTML = 'off';
         var ANS = short_ANS("off_mood");
         return '______ #State' + '\n'+ANS;
    }
    if(value == 'حالت هوشمند روشن'){
        var OFFON =document.getElementById('mood').innerHTML = 'on';
         var ANS = short_ANS("on_mood");
         return '______ #State' + '\n'+ANS;
    }
   var ans = search(value , 'حالت ارام');
   if(ans){
        var t = 't';
        var pos_1 = value.indexOf(t);
        var pos_2 = value.lastIndexOf(t);
        var time_n = value.substring((pos_1+1),pos_2);
        document.getElementById('time').innerHTML = time_n;
        var ANS = short_ANS("time");
        return '______ #State' + '\n'+ANS;
   }
    var ans = search(value , 'ربات');
    var ans_1 = search(value , 'بات');
    var ans_2 = search(value , 'گاگولی');
   if(ans || ans_1 || ans_2){
        var ANS =  message_reply(value);
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
           var ANS = '______ #Omen' + '\n\n' +name +" "+ 'جونم' + ' '+"اینم فالی که برات گرفتم"+" \n\n "+FAl;
           return ANS;
   }
   ans = search(value , 'چالش' );
   if(ans){
           var CHL = Game_CHL();
           var ANS = '______ #Challenge' + '\n' +name+" "+"جونم\n\n"+CHL;
           return ANS;
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

        return '______ #DATE' + '\n' + sh + '\n' + '\n'+ typefa + '\n' + '\n'+ '______' + '\n' + ml + '\n'  + '\n'+ typeeg;
   }

   if(value == 'امار' ){
        var users = document.getElementById('users');
        var users_length = users.childNodes.length;
        var ANS = '__ #Statistics'+'\n'+'\n';
        ANS += 'تعداد پیام هر یک از اعضای فعال گپ ||'+'\n'+'\n';
        var all_ms;
        all_ms = 0;
        for(var i = 0;i < users_length; i++){
            var ref = users.childNodes[i].hasChildNodes();
            if(ref){
                var name_ms = users.childNodes[i].getAttribute('name');
                var ms_user_length = users.childNodes[i].childNodes.length;
                all_ms += ms_user_length;
                ANS += name_ms + '  :  '+ms_user_length+'\n';
            }
        }
        ANS += 'تعداد افراد فعال گپ'+' : '+(users_length-1)+'\n';
        ANS += 'تعداد کل پیام :'+' '+all_ms;
        return ANS;
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
            ans = search(value , 'گوگولی');
            if(ans){
                ans = search(value , 'امارش');
                if(ans){
                    var users = document.getElementById('users');
                    var users_length = users.childNodes.length;
                    var ANS = '__ #Statistics'+'\n'+'\n';
                    ANS += ' پیام های'+'  '+US_ME+'\n\n';
                    var all_ms;
                    all_ms = 0;
                    for(var i = 0;i < users_length; i++){
                        var ref = users.childNodes[i].hasChildNodes();
                        if(ref){
                            var name_ms = users.childNodes[i].getAttribute('name');
                            if(name_ms == US_ME){
                                var ms_user_length = users.childNodes[i].childNodes.length;
                                all_ms += ms_user_length;
                                for(var c = 0;c< ms_user_length;c++){
                                var ms_s = users.childNodes[i].childNodes[c].innerHTML;
                                    ANS += c +' : '+ms_s+'\n';
                                }
                            }
                            
                        }
                    }
                    return ANS;
                }
            }   
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