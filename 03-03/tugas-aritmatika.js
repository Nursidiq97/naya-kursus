// Penugasan Aritmatika

//segi tiga (luas dan keliling)

var luaskeliling = 1 / 2;
var panjangalas = 2;
var t = 40;
c = (luaskeliling / panjangalas) * t;
document.write(` Luas Keliling dari Segitiga / ${luaskeliling} * Panjang alas dari segitiga
${panjangalas} * Tinggi Segitiga ${t}  = Jadi Luas Segitiga Adalah ${c} cm <br/>`);

//Segi panjang (luas dan keliling)

var luas = 50;
var keliling = 20;

c = luas * keliling;
document.write(`Luas Segitiga ${luas}  * luas Keliling Dari Segitiga ${keliling} = ${c} cm2<br/>`);

// Balok Keliling dan Volume

// Keliling Balok
var tinggi = 4;
var panjang = 6;
var lebar = 7;

c = (tinggi + panjang + lebar) * 4;
document.write(`Tinggi Balok ${tinggi} + Panjang Balok ${panjang} +  Lebar Balok ${lebar}= ${c} cm <br/>`);

// volume ballok
var panjangbalok = 15;
var lebarbalok = 8;
var tinggibalok = 5;

c = panjangbalok * lebarbalok * tinggibalok;
document.write(`Panjang Volume Balok ${panjangbalok} cm * Lebar Volume  ${lebarbalok} cm*  Tinggi Volume Balok ${tinggibalok}= Jadi V ${c} Cm3 <br/>`);

//lingkaran

var pi = 3.14;
var r = 15;

c = pi * r;
// document.write(`Jari-Jari Lingkaran ${pi}  * jari-jari lingkaran ${r}= ${c} <br/>');
document.write(`pi ${pi} *  r Jari-Jari Lngkaran ${r} =  ${c} cm2 <br/>`);

//Volume Tabung
var rt = 5;
var phier = 4;
var tinggi = 7;

c = rt * phier * tinggi;
document.write(` radius tabung ${rt} phier tabung  ${phier} *   Tinggi Volome Tabung  ${tinggi} =  jadi volume tabungnya : ${c} cm3 <br/>`);
