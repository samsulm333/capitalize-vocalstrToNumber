///soal 1

// function tarifP(masuk , keluar){
//     var jamPertama = 5000;
//     var perJam = 4000;
//     var masuk = masuk.split(':');
//     var keluar = keluar.split(':');
//     var durasi = (parseInt(keluar[0]) - parseInt(masuk[0])) + (Math.ceil((parseInt(keluar[1]) - parseInt(masuk[1]))/60));
    
//     var bayar = durasi * perJam + jamPertama;
        
//     return bayar;
// }

// console.log(tarifP('11:30', '16:00'));


///Soal 2

function setAlarm(set){
    var now = new Date().getHours() +':'+ new Date().getMinutes();
    var arrNow = now.split(':');
    var set = set.split(':');

    durasi = parseInt((set[0] - arrNow[0])*60 + (set[1] - arrNow[1])); 

    // jam  = durasi/60;
    jam  = Math.floor(durasi/60);
    menit = durasi%60;
    
    console.log(`alarm di set dalam ${jam} jam dan ${menit} menit. `)
    
}

setAlarm('17:10');




///soal 3

function breakRecords(arr){
    let max = arr[0];
    let min = arr[0];
    
    var countMax = 0;
    var countMin = 0;

    for (var i = 0; i < arr.length; i++){
        if (arr[i]>max) {
            max = arr[i];
             countMax++;
        }
        else if(arr[i]< min){
            min = arr[i];
             countMin++;
        }
    }
    
    console.log(`Record Max: ${max} ${countMax} times, Record Min : ${min} ${countMin} times.`);
}
breakRecords([50, 30, 65, 20, 10, 50, 60]);




//soal 4
let karyawanList = [];

function Karyawan(id, nama, usia, divisi){
    this.nomorId = id;
    this.nama = nama;
    this.usia = usia;
    this.divisi = divisi;
}

function tambahDataKaryawan(nama, usia, divisi){
    karyawanList.push(new Karyawan(karyawanList.length+1, nama, usia, divisi));
} 

function findKaryawan(id){
     for (i= 0; i<karyawanList.length; i++){
         if (karyawanList[i].nomorId == id){
             return karyawanList[i];
        }            
    }
}

function hapusDataKaryawan(id){
    for (var i = 0; i < karyawanList.length; i++){
        if (karyawanList[i].nomorId == id){
            delete karyawanList[i];
        }
    }
}

function updateDataKaryawan(id, pindahDivisi){
    for (var i = 0; i< karyawanList.length; i++){
        if (karyawanList[i].nomorId == id){
            return karyawanList[i].divisi = pindahDivisi;
        }
    }
}

tambahDataKaryawan('Dora', 25, 'Marketing');
tambahDataKaryawan('Emon', 27, 'Finance');
tambahDataKaryawan('joni', 24, 'Logistic');
console.log(karyawanList);

console.log(findKaryawan(1));

// console.log(hapusDataKaryawan(1));

// console.log(karyawanList);

updateDataKaryawan(1,'Acounting'); //sorry kak ini saya lupa untuk yang di update apanya jadi saya improove aja,
console.log(karyawanList);





