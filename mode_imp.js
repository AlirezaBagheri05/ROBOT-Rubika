function mode_imp(name,value,MY_BOT,Last_MS,Last_MS_1){
    var ans = search(value , 'شروع');
    if(ans){
        document.getElementById('step').innerHTML = 0;
        var QU_num = document.getElementById('d_user').childNodes.length;
        var AU_num = document.getElementById('c_user').childNodes.length;
        for(var i = 0;i < QU_num; i++){
            var d_user = document.getElementById("d_user");
            d_user.removeChild(d_user.childNodes[0]);
        }
        for(var i = 0;i < AU_num; i++){
            var c_user = document.getElementById("c_user");
            c_user.removeChild(c_user.childNodes[0]);
        }
        var ANS = "ربات اماده یاد گیری است." + " \n\ "+ " \n\ " +"یاد بگیر";
        return ANS;
    }

    var ans = search(value , 'یاد بگیر');
    if(ans){
        var step =  document.getElementById('step').innerHTML;
        if(step !== '0'){
            var ANS = "شما هنوز ثبت نکرده اید"+" \n\ "+" \n\ "+"با گ کلمه . شروع . کد فعلی حذف و ربات به مرحله اول می رود.";
            return ANS;
        }
        document.getElementById('step').innerHTML = 1;
        var QU_num = document.getElementById('d_user').childNodes.length;
        var AU_num = document.getElementById('c_user').childNodes.length;
        for(var i = 0;i < QU_num; i++){
            var d_user = document.getElementById("d_user");
            d_user.removeChild(d_user.childNodes[0]);
        }
        for(var i = 0;i < AU_num; i++){
            var c_user = document.getElementById("c_user");
            c_user.removeChild(c_user.childNodes[0]);
        }
         var num = document.getElementById('num').innerHTML;
         num =  Number(num);
         var num = document.getElementById('num').innerHTML = (num + 1);
         var ANS = "Code " + num + " | " + ' \n\ '+ ' \n\ ' + 'امادس' + ' \n\ '+ ' \n\ ' + 'گ...';
         return ANS;
    }
    
    var ans = search(value , 'گ');
    if(ans){
        var step =  document.getElementById('step').innerHTML;
        if(step !== '1'){
            var ANS = "نمی توان به این مرحله رفت.";
            return ANS;
        }
        var num = document.getElementById('num').innerHTML;
        var d_user = value.replace('گ','');
        var d_user = d_user.trim();
        document.getElementById('d_user').innerHTML +="<p>"+d_user+"</p>";
        var ANS ="Code " + num + " | " + ' \n\ '+ ' \n\ ' + 'میتونی الان ' + ' \n\ '+ ' \n\ ' + 'جدید(گ...)'+ ' \n\ '+ ' \n\ ' + 'یا بری مرحله بعد'+ ' \n\ '+ ' \n\ ' + 'ب...';
        return ANS;
    }
    
    var ans = search(value , 'ب');
    if(ans){
        var step =  document.getElementById('step').innerHTML;
        if(step !== '1'){
            var ANS = "نمیتوان به این مرحله رفت.";
            return ANS;
        }
        var num = document.getElementById('num').innerHTML;
        var c_user = value.replace('ب','');
        var c_user = c_user.trim();
        document.getElementById('c_user').innerHTML +="<p>"+c_user+"</p>";
        var ANS = "Code " + num + " | " + ' \n\ '+ ' \n\ ' + 'میتونی الان ' + ' \n\ '+ ' \n\ ' + 'جدید(ب...)'+ ' \n\ '+ ' \n\ ' + 'یا بری مرحله نهایی'+ ' \n\ '+ ' \n\ ' + 'ثبت';
        return ANS;
    }
    var ans = search(value , 'ثبت');
    if(ans){
        var step =  document.getElementById('step').innerHTML;
        if(step !== '1'){
            var ANS = "نمی توان به این مرحله رفت.";
            return ANS;
        }
        document.getElementById('step').innerHTML = 0;
        var QU_num = document.getElementById('d_user').childNodes.length;
        var AU_num = document.getElementById('c_user').childNodes.length;
        var QU_array = document.getElementById('d_user').childNodes;
        var AU_array = document.getElementById('c_user').childNodes;
        var Code_QU = "";
        for(var i = 0;i < QU_num; i++){
            Code_QU += ('d'+(i+1)+'='+'\"'+QU_array[i].innerHTML+'\";'+' \n\ ');
        }
        var Code_QU_array = "";
        Code_QU_array = "var bank = [";
        for(var i = 0;i < QU_num; i++){
            Code_QU_array += ('d'+(i+1)+',');
        }
        Code_QU_array += "];"+' \n\ ';
        var Code_AU = "";
        for(var i = 0;i < AU_num; i++){
            Code_AU += ('         c'+(i+1)+'='+'\"'+AU_array[i].innerHTML+'\";'+' \n\ ');
        }
        var Code_AU_array = "";
        Code_AU_array = "         var bank = [";
        for(var i = 0;i < AU_num; i++){
            Code_AU_array += ('c'+(i+1)+',');
        }
        Code_AU_array += "];"+' \n\ ';
        var num = document.getElementById('num').innerHTML;
        var ANS;
        ANS = "#code"+' '+num  + '|'+ ' \n\ '+ ' \n\ '+ ' \n\ ';
        ANS += Code_QU;
        ANS += Code_QU_array;
        ANS += "for(var i = 0;i < bank.length;i++){"+' \n\ ';
        ANS += "     var an = search(value , bank[i]);"+' \n\ ';
        ANS += "     if(an){"+' \n\ ';
        ANS += Code_AU;
        ANS += Code_AU_array;
        ANS += "       var num = Math.floor(Math.random() * "+AU_num+");"+' \n\ ';
        ANS += "       var ANS = bank[num];"+' \n\ ';
        ANS += "       return ANS;"+' \n\ ';
        ANS += "    }"+' \n\ ';
        ANS += "}"+' \n\ ';

        return ANS;

    }

    // var PP = document.getElementById('d_user').childNodes.length;
    // alert(PP);

    // d1 ="چخبر";
    // var bank = [d1];
    // for(var i = 0;i < bank.length;i++){
    //     var an = search(value , bank[i]);
    //     if(an){
    //         c1 ="سلامتی";
    //         c2 ="هیچ نشستم ب چت نگا میکنم😔";
    //         c3 ="خبر سلامتییی";
    //         c4 ="نمیگم 😔💩💔";
    //         c5 ="نمیدونم حافظم پاک شده🥺";
    //         var bank = [c1,c2,c3,c4,c5];
    //         var num = Math.floor(Math.random() * 5);
    //         var ANS = bank[num];
    //         return ANS;
    //     }
    // }

}