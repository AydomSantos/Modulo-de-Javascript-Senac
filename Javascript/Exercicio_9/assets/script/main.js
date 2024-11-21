const entradaUm = document.querySelector(".entrada_um");
const entradaDois = document.querySelector(".entrada_dois");
const btn = document.querySelector(".btn");
const saidaDados = document.querySelector(".saida");


btn.addEventListener("click", () => {
  if (entradaUm.value > entradaDois.value) {
    saidaDados.innerHTML = `<p>o numero ${entradaUm.value} e maior</p>`;
  } else if (entradaDois.value > entradaUm.value) {
    saidaDados.innerHTML = `<p>o numero ${entradaDois.value} e maior</p>`;
  } else if (entradaDois.value == entradaUm.value) {
    saidaDados.innerHTML = `<p>o numero ${entradaUm.value} e o numero ${entradaDois.value} são iguais</p>`;
  }

  // console.log(entradaUm.value);
  // console.log(entradaDois.value);
});

function atualizarRelogio() {
    const relogio = document.getElementById("relogio");
  
    const agora = new Date();
    const dataFormatada = agora.toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  
    const horaFormatada = agora.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  
    relogio.innerHTML = `<mark> <p>${dataFormatada} - ${horaFormatada}</p> </mark>`;
  }
  
  // Atualiza o relógio a cada segundo
  setInterval(atualizarRelogio, 1000);
  
  // Chama a função inicialmente para evitar atraso de 1 segundo na primeira exibição
  atualizarRelogio();
  