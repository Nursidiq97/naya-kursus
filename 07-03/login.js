let email = "";
let password = "";
const formLogin = document.querySelector("#Login");
formLogin.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (email == "sidiqnur363@gmail.com" && password == "12345") {
    // alert('Selamat Datang boy');
    const Element = document.querySelector("#Login");

    Element.style = "display: none;";

    const h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.innerText = "Anda Kena Tipu";
  } else {
    // alert('Tidaakkk.....');
    const errMsg = document.querySelector("span");
    errMsg.style.display = "block";
  }
});

const inEmail = document.querySelector("#email");
inEmail.addEventListener("keyup", (evt) => {
  email = evt.target.value;
});

const inPassword = document.querySelector("#password");
inPassword.addEventListener("keyup", (evt) => {
  password = evt.target.value;
});
