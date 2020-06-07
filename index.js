var word = ['have', 'a', 'good', 'day', 'on', 'it', 'the'];
var n = ['in','a','on','the', 'it'];
var x = n.indexOf('ok')
console.log(x);



///Capitalize
function kap(str){
    var kata = str.toLowerCase().split(' ');
    var exceptW = ['in','a','on','the', 'it'];
    var hasil = [];

    for(var i = 0; i<kata.length; i++){
        if(exceptW.indexOf(kata[i])==-1){
            hasil.push(kata[i][0].toUpperCase() + kata[i].substr(1));
        }
        else if(exceptW.indexOf(kata[i])!=-1){
            hasil.push(kata[i]);    
        }
    }
    return hasil.join(' ');
}

console.log(kap('have a good day on it the'));





///Vocal String to Number
function Alay(str){
    var kata = str.toLowerCase().split('');
    var vocalW = ['a','i','e','o'];
    var hasil = [];

    for(var i=0; i < kata.length; i++){
        if (vocalW[0].indexOf(kata[i])!=-1){
            hasil.push(kata[i] = '4');
        }
        else if (vocalW[1].indexOf(kata[i])!=-1){
            hasil.push(kata[i] = '1');
        }
        else if (vocalW[2].indexOf(kata[i])!=-1){
            hasil.push(kata[i] = '3');
        }
        else if (vocalW[3].indexOf(kata[i])!=-1){
            hasil.push(kata[i] = '0');
        }
        else {hasil.push(kata[i]);}
            
    }
   return hasil.join('');
}

console.log(Alay('hello,what a good day'));

