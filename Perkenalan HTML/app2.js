function pendeteksiGanjilGenap(angka) {

    if( angka%2 == 0){
        return "genap"
    }else{
        return "ganjil"
    }
    
}


console.log( pendeteksiGanjilGenap(7) )

function penghitungLuasSegitiga(alas, tinggi) {
    
    var hasilLuas = alas * tinggi / 2

    return hasilLuas
}
console.log( penghitungLuasSegitiga(6,10) )

// alert('Selamat Datang Di WEB kami')
// var namaPengunjung = prompt('Siapa nama anda?')
// var seorangPelajar = confirm('Apakah anda seorang pelajar?')

// console.log(namaPengunjung)
// console.log(seorangPelajar)
alert('pendeteksi ganjil genap')
var angkaInput =  prompt('Masukan angka')
alert( pendeteksiGanjilGenap(angkaInput) )