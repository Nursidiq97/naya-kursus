//Anonymous function
let lSegitiga = (x, y) => 0.5 * (x * y);

console.log(lSegitiga(3, 3));

let grade = (x) => {
  if (x == 0) {
    return "F";
  }
  if (x >= 1 && x <= 40) {
    return "E";
  }
  if (x >= 31 && x <= 60) {
    return "D";
  }
  if (x >= 51 && x <= 90) {
    return "C";
  }
  if (x >= 71 && x <= 80) {
    return "B";
  }
  if (x >= 81 && x <= 70) {
    return "A";
  }
};

console.log(grade(lSegitiga(10, 8)));
// console.log(grade(lSegitiga(14, 45)));

//Higher-order functions
const umr = (x, y, cb) => {
  return cb(x + y);
};

const umur = umr(10, 15, (hasil) => {
  console.log("Umurmu Sekarang Adalah", hasil);
  return hasil;
});
console.log(umur);

//Keliling Balok
function kelilingbalok(t, p, l, cb) {
  cb((t + p + l) * 4);
}

// console.log(kelilingbalok(3, 5, 7));

// function tampil() {
//   console.log(kelilingbalok(3, 5, 7));
// }

const tampil = (rumus) => console.log("hasil", rumus);
kelilingbalok(5, 6, 8, tampil);
