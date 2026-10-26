// formulario.js - confere o formulario de contato antes de enviar
// Usado por: contato.html

const formulario = document.getElementById("form-contato");
const avisoEnvio = document.getElementById("form-aviso");

// pinta a borda de vermelho e escreve o erro embaixo do campo
function mostrarErro(idCampo, mensagem) {
  document.getElementById(idCampo).classList.add("campo-erro");
  document.getElementById("erro-" + idCampo).textContent = mensagem;
}

// tira a borda vermelha e apaga o erro
function limparErro(idCampo) {
  document.getElementById(idCampo).classList.remove("campo-erro");
  document.getElementById("erro-" + idCampo).textContent = "";
}