//------------------------Penugasan Objeck----------------------------//
//---------------------------SOAL-------------------------------------//

// Tugas:
// 1. buat fungsi untuk cek apakah object punya key tertentu atau tidak

// 2.
// {
// "x": "abc",
// "y": 10,
// "z": 20,
// }
// Tampilkan penjumlahan dari angka yang ada

let obj = {};
function akuOKE(obj) {
  return Object.keys(obj).length === 0;
}

console.log(akuOKE(obj));
// true

const biodata = {
  nama: "Nur Sidiq",
  umur: "17",
  alamat: "palembang",
  tgl: 7,
  berat: new Set(),
};

const bio = {
  nama: "Nur Sidiq",
  umur: "17",
  tgl: 7,
  nama: 50,
};
let validasi = (obj, keys) => {
  if (obj[keys]) {
    return true;
  } else {
    return false;
  }
};

console.log(validasi(biodata, "berat"));

const nilai = {
  nama: "Nur Sidiq",
  mtk: 20,
  ipa: 40,
  ips: 60,
};

let sum = (x) => {
  let sum = 0;
  for (let val in x) {
    if (typeof x[val] == "number") {
      sum += x[val];
    }
  }
  return sum;
};

console.log(sum(nilai));
