const titulo = document.querySelector(".titulo");
titulo.textContent = "Bem vindo ao meu site";

const botao = document.querySelector("#botaoCor");
const corpo = document.querySelector("body");

botao.addEventListener("click", () => {
    const corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);
    corpo.style.backgroundColor = corAleatoria;

    const tituloAleatorio = "#" + Math.floor(Math.random(cinema, cachorro));
    titulo.textContent = tituloAleatorio;
})
