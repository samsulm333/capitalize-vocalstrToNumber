///soal 1

function tarifP(masuk , keluar){
    var jamPertama = 5000;
    var perJam = 4000;
    var masuk = masuk.split(':');
    var keluar = keluar.split(':');
    var durasi = (parseInt(keluar[0]) - parseInt(masuk[0])) + (Math.ceil((parseInt(keluar[1]) - parseInt(masuk[1]))/60));
    
    var bayar = durasi * perJam + jamPertama;
        
    return bayar;
}

console.log(tarifP('11:30', '16:00'));


///Soal 2

function setAlarm(set){
    var now = new Date().getHours() +':'+ new Date().getMinutes();
    var arrNow = now.split(':');
    var set = set.split(':');

    durasi = parseInt((set[0] - arrNow[0])*60 + (set[1] - arrNow[1])); 

    jam  = Math.floor(durasi/60);
    menit = durasi%60;
    
    console.log(`alarm di set dalam ${jam} jam dan ${menit} menit. `)
    
}

setAlarm('13:22');
