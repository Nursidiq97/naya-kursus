# Pertemuan Minggu Ke 06 Hari Ke 3
# Ansinkron

# Hari Ke-3: Pemrograman Asinkron
## Pembahasan:

### Konsep pemrograman asinkron dan non-blocking
Perbedaan concurrency dengan parallelism
Callback, promise, dan async-await
Ansinkronus 
Ansinkron bisa di lakukan waktu yang sama
non bloking jadi sifat yang sama = proses jalan proses jalan y jalan aja
ada beberapa prooses yang perlu nunggu = misalkan nunggu 20 detik harus consol.log
call back adalah untuk membuat salah satu cara menangkap data yang di tentukan oloeh waktu.

# Promis 
untuk menggunakan promise
menggunakan new Promise
vokus apa yang di perlukan paramaternya 
untuk membuat promes 
parameter pakai resolve 
resolve = untuk menangkap hasil
reject itu semacam throw
then untuk hasil.

jadi promise itu pakai then dan cetch
penggunaany snendiri itu pakai parameter yang namanya resolve, sama reject.

reject itu mengingkari tapai bsa ngasih alasan.

# Async - Await

Async — await adalah salah satu fitur baru dari javascript yang di gunakan untuk menangani hasil dari sebuah promise.

Caranya adalah dengan menambahkan kata ‘async’ di depan sebuah fungsi untuk mengubahnya menjadi asynchronous.

Sedangkan await berfungsi untuk menunda sebuah kode di jalankan, sampai proses asynchronous berhasil.

# Then dan Catch
    Adalah bisa di pakai ber kali-kali. artinya bukan hanya sekali. mereka akan mengambil hasil dari yang di atasnya, kemudian ada finnally tidak peduli then atau catch dian akan tetap jalan.

# Promise.all() 
    Adalah untuk mereturn semua promise dalam bentuk erray. menjalankan semua hasil jika gagal akan gagal semua
# Promise.Race()
    Adalah untuk mereturn semua promise yang tapi akan  menamilkan hasil yang paling cepat menjalanakan semua tapi yang paling cepat yang nanti akan di pakai.
# Promise.allseleted()
    Adalah untuk menampilkan semua seperti all tetapi menampilkan veluenya, apakah  fulfield atau reject.
