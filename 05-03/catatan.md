                Pertemuan Minggu Ke 5 Hari Ke 3

                    
OBJEK
DALAM JAVA SCRIPT

Const siswa = {ama ‘Hamdan’, usia: 18};
Console.log(siswa[‘nama’]);
Console.log(siswa[‘nama’]);

// 'in js', PR memeperbaiki function validasi 

// object
// key - value

onst siswa = {
nama: 'Hamdan',
usia: 18,
kelas: 'XII',
};
console.log(Object.values(siswa));

const siswa = {
nama: 'Hamdan',
usia: 18,
kelas: 'XII',
'alamat lengkap': 'Jalan Kurang',
};
console.log(siswa['alamat lengkap']);


ada nilai2 yg dianggap true dan false, -1 kebawah dan 1 keatas dianggap truthy

const siswa = {
: 'Hamdan',
: 18,
: 'XII',
};

 console.log(siswa[0]);
const siswa = {
nama: 'Hamdan',
usia: 18,
kelas: 'XII',
};  

 const keys = Object.keys(siswa);
for (let i = 0; i < keys.length; i++) {
console.log(keys[i]);

const keys = Object.keys(siswa);
for (let i = 0; i < keys.length; i++) {
console.log(siswa[keys[i]]);
}

const siswa = {
nama: 'Hamdan',
usia: 18,
kelas: 'XII',
};

Object.keys(siswa).forEach(k => { console.log(k); });  
motormu motorku
const siswa = {
nama: 'Hamdan',
usia: 18,
kelas: 'XII',
};  
 const murid = {...siswa};
murid.nilai = 90;
console.log(siswa);
console.log(murid);

di javascript ada nama object descutring…
const siswa = {
nama: 'Hamdan',
usia: 18,
kelas: 'XII',
};  
 // object destructuring
const { nama, usia } = siswa;
console.log(nama, usia);

// Tugas:
// 1. buat fungsi untuk cek apakah object punya key tertentu atau tidak

// 2.
// {
// "x": "abc",
// "y": 10,
// "z": 20,
// }
// Tampilkan penjumlahan dari angka yang ada
