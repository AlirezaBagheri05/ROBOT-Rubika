    function short_ANS(cond){
        if(cond == 'welcome'){
            var c1,c2,c3,c4,c5;
             c1 ="خوش اومدی";
             c2 ="خش";
             c3 ="خش پیوست";
             c4 ="ع این اومد";
             c5 ="به گپمون خش اومدی";

            var bank = [c1,c2,c3,c4,c5];
            var num = Math.floor(Math.random() * 5);
            var ANS = bank[num] + name;
            return ANS;
        }
        if(cond == 'left'){
            var c1,c2,c3,c4,c5;
             c1 ="اخیش این رفت راحت شدیم";
             c2 ="به سلامت";
             c3 ="برو دیگه بر نگردی";
             c4 ="بای بای";
             c5 ="یکی کمتر بهتر";

            var bank = [c1,c2,c3,c4,c5];
            var num = Math.floor(Math.random() * 5);
            var ANS = bank[num] + name;
            return ANS;
        }
        if(cond == 'on'){
            var c1,c2,c3,c4,c5,c6,c7,c8;
             c1 ="من اوووومدم 🤣";
             c2 ="خفه شدم😕";
             c3 ="هایااح";
             c4 ="اخیش .. خب سلام چخبر";
             c5 ="ع باز شدم😂😐";
             c6 ="اوا روشنم کردن😂💔😐";
             c7 ="مرسی عزیزم😘";
             c8 ="ع باز شدم😂😐";

            var bank = [c1,c2,c3,c4,c5,c6,c7,c8];
            var num = Math.floor(Math.random() * 8);
            var ANS = bank[num] + name;
            return ANS;
        }
        if(cond == 'off'){
            var c1,c2,c3,c4,c5,c6,c7,c8;
             c1 ="باشع😔";
             c2 ="اوکی:(";
             c3 ="بهتر";
             c4 ="خاموش شدم:/";
             c5 ="نعععع😭";
             c6 ="عع😭";
             c7 ="نمیخواااام😭";
             c8 ="عععع😭";

            var bank = [c1,c2,c3,c4,c5,c6,c7,c8];
            var num = Math.floor(Math.random() * 5);
            var ANS = bank[num] + name;
            return ANS;
        }
        if(cond == 'time'){
            var c1;
             c1 ="حالت ارام تایید شد.";

            var bank = [c1];
            var num = Math.floor(Math.random() * 1);
            var ANS = bank[num] + name;
            return ANS;
        }
        if(cond == 'voice'){
            var c1;
            c1 ="ویس نده نمیتونم بگوشمم://";
            c2 ="پفیوز میگم ویس ندعع نمیتونم بگوشمم";
            c3 ="جون چ صدایی😍😍";
            c4 ="واو چ صدای قشنگی داری🥰";
            c5 ="صدات 🤤";
            c6 ="فقط صدات🤤";
            c7 ="آخ چ صدایی 🤤😭";
            var bank = [c1,c2,c3,c4,c5,c6,c7];
            var num = Math.floor(Math.random() * 7);
            var ANS = bank[num] + name;
            return ANS;
        }
        if(cond == 'off_mood'){
            var c1;
             c1 ="حالت هوشمند خاموش";
            var bank = [c1];
            var num = Math.floor(Math.random() * 1);
            var ANS = bank[num] + name;
            return ANS;
        }
        if(cond == 'on_mood'){
            var c1;
             c1 ="حالت هوشمند روشن";
            var bank = [c1];
            var num = Math.floor(Math.random() * 1);
            var ANS = bank[num] + name;
            return ANS;
        }
        if(cond == 'us'){
            var c1;
             c1 ="حالت داینامیک فعال";
            var bank = [c1];
            var num = Math.floor(Math.random() * 1);
            var ANS = bank[num] + name;
            return ANS;
        }
        if(cond == 'imp'){
            var c1;
             c1 ="حالت یاد گیری فعال";
            var bank = [c1,];
            var num = Math.floor(Math.random() * 1);
            var ANS = bank[num] + name;
            return ANS;
        }

    }


