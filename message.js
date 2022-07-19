function message(value , name){
    if(value == 'hello' || value == 'سلام' || value == 'صلام' || value == 'سلوم' ||  value == 'سلاام' ||  value == 'صلوم' ||  value == 'صلام' || value == 'صل' ||  value == 'hi' ||  value == 'های'||  value == 'شلام'||  value == 'سل'||  value == 'سلاام' )
    {

        var d1 ="سلووم جونمم";
        var d2 ="به به چطوری";
        var d3 ="شلام";
        var d4 ="اشقممم";
        var d5 ="شب خوش";
        var d6 ="صلاام";
        var d7 ="جیگرم";
        var d8 ="سلااام";
        var d9 ="خوبی";
        var d10 ="خبی ط";
        var d11 ="نفسم";
        var d12 ="چطوری";
        var d13 ="سلاام";
        var d14 ="شلام";
        var d15 ="چخبرا";
        var d16 ="خبی";
        var bank = [d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16];
        var num = Math.floor(Math.random() * 16);
        var ANS = bank[num] +" "+ name;
        return ANS;
    }

        return null ;
}

