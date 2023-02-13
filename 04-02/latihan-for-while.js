// perulangan menggunakan For untuk menampilkan bilangan Genap dari -10 sampai 10
console.log("perulangan angka genap dengan For");
for (var i = -5; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// perulangan menggunakan For untuk menampilkan bilangan Ganjil dari -10 sampai 10
console.log("perulangan angka Ganjil dengan For");
for (var i = -10; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// perulangan menggunakan While untuk menampilkan bilangan Genap dari -10 sampai 10
console.log("perulangan angka Genap dengan While");
var i = -10;
while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// perulangan menggunakan While untuk menampilkan bilangan Ganjil dari -10 sampai 10
console.log("perulangan angka Ganjil dengan While");
var i = -10;
while (i <= 10) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}
