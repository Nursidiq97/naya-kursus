function onClick() {
  setInterval(() => {
    document.getElementById("count").innerHTML = count;
    count--;
  }, 1000);

  alert("Siap - Siap Mendaptkan Hadiah");
}
var count = 5;
var interval = setInterval(function () {
  if (count === -1) {
    clearInterval(interval);
    window.onload = function () {
      document.getElementById("onClickBtn").click();
    };
    const Element = document.querySelector("#onClickBtn");
    Element.style = "display: none;";

    const Ell = document.querySelector("#count");
    Ell.style = "display: none;";

    const Panas = document.querySelector("#container");
    Panas.style = "display: none;";

    const ikan = document.querySelector("#ikan");
    ikan.style = "display: none;";

    const h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.innerText = "Cie Nungguin Ya...!";
  }
  console.log(count);
}, 1000);
