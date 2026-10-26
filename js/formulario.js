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

// roda quando a pessoa clica em "Enviar mensagem"
function validarFormulario(evento) {
  evento.preventDefault(); // segura o envio ate tudo estar certo

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value.trim();

  let tudoCerto = true;
  avisoEnvio.textContent = "";

  if (nome === "") {
    mostrarErro("nome", "Escreva o seu nome.");
    tudoCerto = false;
  } else {
    limparErro("nome");
  }

  if (email === "") {
    mostrarErro("email", "Escreva o seu e-mail.");
    tudoCerto = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    mostrarErro("email", "E-mail inválido. Exemplo: voce@email.com");
    tudoCerto = false;
  } else {
    limparErro("email");
  }

  if (assunto === "") {
    mostrarErro("assunto", "Escolha um assunto.");
    tudoCerto = false;
  } else {
    limparErro("assunto");
  }

  if (mensagem.length < 10) {
    mostrarErro("mensagem", "Escreva pelo menos 10 letras.");
    tudoCerto = false;
  } else {
    limparErro("mensagem");
  }

  if (tudoCerto) {
    avisoEnvio.textContent = "Tudo certo, " + nome + "! (demonstração: nada foi enviado)";
    formulario.reset();
  }
}