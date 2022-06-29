let btnSol = document.getElementById("btnSol");
let btnLuna = document.getElementById("btnLuna");

btnSol.addEventListener("click", ()=> {
    let body = document.querySelector("body");
    body.classList.add("bodyLuz");
});
btnLuna.addEventListener("click", ()=> {
    let body = document.querySelector("body");
    body.classList.remove("bodyLuz");
});