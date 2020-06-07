///soal 1

function tarifP(masuk , keluar){
    var jamPertama = 5000;
    var perJam = 4000;
    var masuk = masuk.split(':');
    var keluar = keluar.split(':');
    var durasi = (parseInt(keluar[0]) - parseInt(masuk[0])) + (Math.ceil((parseInt(keluar[1]) - parseInt(masuk[1]))/60));
    
    var bayar = Math.ceil(durasi) * perJam + jamPertama;
    
        
    
    return bayar;
}


console.log(tarifP('11:30', '16:00'));