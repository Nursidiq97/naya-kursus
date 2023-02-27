//  Tugas DOM SELECTION

test = (lmen) => {
  if (lmen !== null) {
    return " Ada Coy";
  } else {
    throw new Error("Tidak Ada Coy");
  }
};
console.log(test(document.getElementById("judul")));
console.log(document.getElementsByClassName("h1"));
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "grey";

const Nu = document.getElementById("Nu");
Nu.style.color = "red";

// Menghitung Jumlah Semua Angka
const angka = document
  .getElementById("angka")
  .innerText.split("\n")
  .map(Number)
  .reduce((acc, v) => acc + v,0);
console.log(angka);
