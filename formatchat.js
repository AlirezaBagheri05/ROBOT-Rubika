function formatchat(type,value){
    if(type == 'state'){
        var header = 'Ⲷ #وضعیت'+'\n\n';
        var main = value+'\n';
        var footer = '─┅━━━━ ⚠ ━━━━┅─';
        return (header+main+footer);
    }
    if(type == 'Omen'){
        var header = 'Ⲷ #فال'+'\n\n';
        var main = value+'\n';
        var footer = '─┅━━━━ ⚛ ━━━━┅─';
        return (header+main+footer);
    }
    if(type == 'Confess'){
        var header = 'Ⲷ #اعتراف'+'\n\n';
        var main = value+'\n';
        var footer = '─┅━━━━ ⛔ ━━━━┅─';
        return (header+main+footer);
    }
    if(type == 'Challenge'){
        var header = 'Ⲷ #چالش'+'\n\n';
        var main = value+'\n';
        var footer = '─┅━━━━ ☢ ━━━━┅─';
        return (header+main+footer);
    }
    if(type == 'DATE'){
        var header = 'Ⲷ #تاریخ'+'\n\n';
        var main = value+'\n';
        var footer = '─┅━━━━ ⏰ ━━━━┅─';
        return (header+main+footer);
    }
    if(type == 'Statistics'){
        var header = 'Ⲷ #آمار'+'\n\n';
        var main = value+'\n';
        var footer = '─┅━━━━ ␟ ━━━━┅─';
        return (header+main+footer);
    }
    if(type == 'validate'){
        var header = 'Ⲷ #احراز_هویت'+'\n\n';
        var main = value+'\n';
        var footer = '─┅━━━━ೊ ━━━━┅─';
        return (header+main+footer);
    }
    if(type == 'start'){
        var header = 'ربات با موفقیت بر  روی گپ نصب شد'+'\n';
        var main = "گوگولی هستم ֍_֍"+'\n\n';
        main += "راهنما"+'\n';
        var footer = '─┅━━━━ ␀ ━━━━┅─';
        return (header+main+footer);
    }
}