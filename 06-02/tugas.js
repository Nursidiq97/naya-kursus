// TUGAS
// Buat fungsi pembagian, cek jika pembagian adalah 0, lempar eror tangkap eror dan kelola erornya....

const PembagianError = "PembagianError";
const InputError = "InputError";

function bagi(x, y) {
  if (y === 0) {
    const err = new Error();
    err.name = PembagianError;
    throw err;

  } else if (typeof x != "number") {
    const err = new Error();
    err.name = InputError;
    throw err;

  } else if (typeof y != "number") {
    const err = new Error();
    err.name = InputError;
    throw err;
  } 
  else {
    console.log(x / y);
  }
}

try {
  bagi(2, 'y');
} catch (err) {
  if (err.name == PembagianError) {
    throw("Pembagi tidak boleh menggunakan 0");
  }
  if (err.name == InputError) {
    throw("Inputan harus  menggunakan angka");
  }
}
