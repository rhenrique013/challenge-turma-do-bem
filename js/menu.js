// menu.js - abre e fecha o menu no celular e no tablet
// Usado por: as 7 paginas

const botaoMenu = document.getElementById("menu-botao");
const listaMenu = document.getElementById("menu-lista");

// coloca ou tira a classe "aberto" da lista do menu
function alternarMenu() {
  listaMenu.classList.toggle("aberto");

  // avisa ao leitor de tela se o menu esta aberto ou fechado
  const estaAberto = listaMenu.classList.contains("aberto");
  botaoMenu.setAttribute("aria-expanded", estaAberto);
}

botaoMenu.addEventListener("click", alternarMenu);
