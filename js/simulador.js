// simulador.js - compara doar uma vez com doar todo mes
// Usado por: index.html
const campoValor = document.getElementById("valor-doacao");
const totalUnico = document.getElementById("total-unico");
const totalAno = document.getElementById("total-ano");
const fraseSimulador = document.getElementById("simulador-frase");

// transforma 360 em "R$ 360,00"
function formatarReais(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
// roda a cada numero que a pessoa digita
function atualizarSimulador() {
const valor = Number(campoValor.value);
    if (valor <= 0) {
        totalUnico.textContent = "R$ 0,00";
        totalAno.textContent = "R$ 0,00";
        fraseSimulador.textContent = campoValor.value === "" ? "" : "Digite um valor maior que zero.";
        return;
    }   
    totalUnico.textContent = formatarReais(valor);
    totalAno.textContent = formatarReais(valor * 12);
    fraseSimulador.textContent = "Doando todo mês, sua ajuda fica 12 vezes maior.";
}
campoValor.addEventListener("input", atualizarSimulador);