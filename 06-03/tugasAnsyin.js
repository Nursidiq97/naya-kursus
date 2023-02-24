// const cari = (a, b, cb) => {
//     setTimeout(()  => {
//         return a + b;
//     }, 30000);
// }

// cari(1, 1,) (hasil) => {
//     cari(h1,)
// });

//Promise

// const cari = (a, b) => {
//     return new Promise()
// }

// Tugas Petemuan Minggu ke Tiga
/*
const pembagian = (x, y) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if (y === 0) {
                reject (( new Error ('Tidak bisa menggunakan angka 0 kawan'));
            }, 3000


        }
    });
};

const main = async () = {
    try {
        const hasil = await pembagian(2, 1);
        console.log(hasil);
    } catch (err) {
        console.log(err);
    } 

};
main();
*/

const pembagian = (x, y) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (y === 0) {
        reject(new Error("Tidak Bisa Menggunakan Angka 0 Kawan!!!"));
      } else if (typeof x != "number") {
        reject(new Error(" Inputnya Harus Angka Kawan!!!"));
      } else if (typeof y != "number") {
        reject(new Error(" Inputnya  Harus Angka Kawan!!!"));
      } else {
        return resolve(x / y);
        // resolve untuk menangkap hasil
        // reject untuk itu semacam trhow untuk menangkap hasil
      }
    }, 3000);
  });
};

const main = async () => {
  try {
    const hasil = await pembagian(10, "y");
    console.log(hasil);
  } catch (err) {
    console.log(err);
  }
};
main();

// Async — await adalah dari javascript yang di gunakan untuk menangani hasil dari sebuah promise.
// caranya adalah dengan menambahkan kata ‘async’ di depan sebuah fungsi untuk mengubahnya menjadi asynchronous.

//  Mencoba Tambahan Materi

//  Promise.All
const mainAll = async () => {
  try {
    const hasil = await Promise.all([pembagian(9, 2), pembagian(9, 2), pembagian(9, 3), pembagian(10, 2)]);
    console.log(hasil);
  } catch (err) {
    console.log(err);
  }
};
mainAll();

//  Promise.Race
const mainRace = async () => {
  try {
    const hasil = await Promise.race([pembagian(9, 2), pembagian(9, 2), pembagian(9, 3), pembagian(10, 2)]);
    console.log(hasil);
  } catch (err) {
    console.log(err);
  }
};
mainRace();

//  Promise.alsetled
const mainallseleted = async () => {
  try {
    const hasil = await Promise.allSettled([pembagian(9, 2), pembagian(9, 2), pembagian(9, 3)]);
    hasil
      .filter((h) => h.status == "fulfilled")
      .forEach((h) => {
        console.log(h);
      });
  } catch (err) {
    console.log(err);
  }
};
mainallseleted();
