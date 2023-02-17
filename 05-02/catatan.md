Pertemuan Minggu ke 5 Hari ke Dua
Struktur Data Erray

Enews table data yang kita pakai
Struktur data itu adalah data yang jumkahnya lebih dari satu.
Struktur data ada 2 strukutur data yaitu:
Struktur data erray dan struktur data erray

1.struktur data erray
Erray sendiri yang struktur data yang berbentukn deret 2323456789
Pembahasan:

1. Konsep struktur data
   Index itu data yang di beri nomer
   Di mulai dari 0
   Unuk menyimpan struktur data
2. Konsep array
   Erray itu di refrensikan
3. Operasi dasar pada array
4. Fungsi-fungsi pada array


   contoh buat erray
   Console.log[10, 30];
   Const scores = (10, 30, 50);
   Consol.log(scores);

Console.log[10, 30, 50];
Const scores = (10, 30, 50);
// 0 1 2 3
Consol.log(scores.[0]);

Console.log[10, 30, 50];
// 0 1 2 3
Scores [1] =25;
Consol.log(scores.[0]);
Const scores = [10, 30, 50];
Const values = […scores]; = proses secara copy titik 3 namanya adalah spread oprator
Values [0] =15;
Console.log(scores, values);

volues.pop untuk arah mengambil atau mengarahkan
volues.shift()) untuk menambahkan data yang depan (Mengambil)
Values.unshif = menambahkan data belakang
Values.push = menambahkan data 
Splice = menambhkan data dan mengapus data
Map = untuk mapping data
Reduce =

Costr scores = [10, 30, ,50];
Console.log(scores.lenght);

Hasilnya = 04 data dikosongkasn satu
Catatan
Splice adalah untu menambahkan data dan menhapus data.
Const scores = [10, 30, 50];
Scores.splice(2, 0,); untuk menghilakan atau menabhkan data tengah
Scores.splice(2, 0,);
Console.log(scores)
Map = merturn erray baru
Erray barunya sama dengan erray secor
Const scores = [10, 30, 50]);
Const hasil = scores.map(V => {
Return v % 2 == 0 ? [‘ganjil’, ‘genap’,]
});

Console.log(hasil);
Const scores = [10, 30, 50]);
//accumulator adalah nilai terakhir nilai redurs
Acimulator yang paling pertama
2 element erray
3 indexs
Const hasil = scores.reduce(console.log, 0
Console.log(hasil); returny satu data doang
});

Buat erray lakukan semua oprasi ini
Buat erray dengan string
