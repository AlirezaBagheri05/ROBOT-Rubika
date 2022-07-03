function message(value , name){
    if(value == 'ربات' || value == 'سلام' || value == 'صلام' || value == 'سلوم' ||  value == 'سلاام' ||  value == 'صلوم' ||  value == 'صلام' ||  value == 'hi' ||  value == 'های' )
    {

        var d1 =" سلووم جونمم ";
        var d2 =" به به چطوری  ";
        var d3 =" گوه نخور ";
        var d4 =" اشقممم ";
        var d5 =" شب خوش ";
        var d6 =" صلاام ";
        var d7 =" جیگرم  ";
        var d8 =" سلااام ";
        var d9 =" خوبی ";
        var d10 =" خبی ط  ";
        var d11 =" چخبر  ";
        var bank = [d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11];
        var num = Math.floor(Math.random() * 11);
        var ANS = bank[num] + name;
        return ANS;
    }

        return null ;
}

