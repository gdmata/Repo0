"use strict";

let cxHora = document.getElementById("hora");

let cxMinutos = document.getElementById("minuto");

let cxSegundos = document.getElementById("segundos");

function atualizarhora() {
  const agora = new Date();
  let horas = agora.getHours();
  let minutos = String(agora.getMinutes()).padStart(2, "0");
  let segundos = String(agora.getSeconds()).padStart(2, "0");
  cxHora.innerText = horas;
  cxMinutos.innerText = minutos;
  cxSegundos.innerText = segundos;
}

setInterval(atualizarhora, 1000);
atualizarhora();

function efeitoVidro(elemento) {
  elemento.style.fontFamily = "Orbitron";
  elemento.style.display = "flex";
  elemento.style.fontSize = "120px";
  elemento.style.justifyContent = "center";
  elemento.style.alignItems = "center";
  elemento.style.backdropFilter = "blur(10px)";
  elemento.style.borderRadius = "20px";
}

efeitoVidro(cxHora);
efeitoVidro(cxMinutos);
efeitoVidro(cxSegundos);
