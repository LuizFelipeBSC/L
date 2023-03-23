if (localStorage.getItem("token") == null) {
    alert("Você precisa fazer o Login");
    window.location.href = "./assets/html/login.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));
let logado = document.querySelector("#logado");
logado.innerHTML = `Bem-vindo ${userLogado.nome}`;

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/login.html";
}