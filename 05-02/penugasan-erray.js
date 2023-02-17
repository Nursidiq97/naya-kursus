//------------------------Penugasan Erray Eray fns--------------------//
//---------------------------SOAL-------------------------------------//
//---Buatlah data erray lakukan semua oprasi ini menggunakan string---//
//-------------------------jawaban ada di bawah-----------------------//

//----------------------Method shift-----------------------------------//
const namaikan = ["Ikan Koi", "ikan Paus", "Ikan Nila"];
const foo = namaikan.shift("");

console.log(foo);
//output => Ikan Koi

console.log(namaikan);

// Method shift()
//ia menghapus elemen yang pertama dari suatu array dan mengembalikan nilai yang dihapus.

//----------------------Method unishift--------------------------------//
const namaburung = ["Kutilang", "Elang", "Emprit"];
const okee = namaburung.unshift("Kuntul");

console.log(okee);
// Output => 4

console.log(namaburung);
// Output => [ 'Kuntul', 'Kutilang, 'Elang, 'Emprit' ]

// akan menambah satu atau lebih elemen ke dalam suatu array.
//dia akan menambahkan Setelah menambahkan elemen ke depan array
//method unshift()
// menambahkan jumlah baru array yang sudah berubah

//----------------------Method push------------------------------------//
let minuman = ["Es Teh", "Anggur", "Susu"];
let minumanITEM = minuman.pop();

console.log(minumanITEM);
// Output => Susu

console.log(minuman);
// Output => [ 'Es Teh', 'Anggur' ]

// push() adalah menambahkan  satu atau lebih elemen ke akhir sebuah array.
// Elemen-elemen tersebut di tambahkan

//----------------------Method pop-------------------------------------//
let languages = ["Java", "PHP", "Python"];
let poppedItem = languages.pop();

console.log(poppedItem);
// Output => Python

console.log(languages);
// Output => [ 'Java', 'PHP' ]
// Catatan
// Method pop() merupakan kebalikan dari push(), ia menghapus elemen terakhir
//dari suatu array dan mengembalikan elemen yang dihapus. Method ini tidak menerima parameter apapun.

//----------------------Method splice----------------------------------//
const buah = ["Banana", "Apple", "orange", "Mango"];
buah.splice(2, 3, "Lemon", "Kiwi");

console.log(buah);
// Output => ['Banana', 'Apple', 'Lemon', 'Kiwi', 'Mango']

// menambahkan atau mengurangi elemen tetapi kita bisa memilih letaknya dimana

//----------------------Method map-------------------------------------//
const fruits = ["Banana", "Apple", "orange", "Mango"];
const newFruits = fruits.map((nilai) => {
  return nilai + " " + "Ambon";
});
console.log(newFruits);

// menambahkan erray baru dari pemanggilan fungi untuk setiap
//elemen dengan panjang yang sama seperti erray yang lama
//nilai

//----------------------Method reduce----------------------------------//

const namalengkap = ["Nur", "Sidiq"];
const fullname = namalengkap.reduce((nilai, hasil) => nilai + hasil, "");
console.log(fullname);

//Menambahkan Semua elemen erray yang ada di dalam untuk di return jadi satu nilai.
