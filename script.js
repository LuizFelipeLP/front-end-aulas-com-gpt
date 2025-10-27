const titulo = document.querySelector(".titulo");
titulo.textContent = "Bem vindo ao meu site";

const botao = document.querySelector("#botaoCor");
const corpo = document.querySelector("body");

botao.addEventListener("click", () => {
    const corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);
    corpo.style.backgroundColor = corAleatoria;

    const frases = [
        "To desesperado",
        "Muito medo",
        "Falta de ar",
        "Conseguirei?",
        "Tranquilo"
    ];
    const indice = Math.floor(Math.random() * frases.length);
    titulo.textContent = frases[indice];
})
