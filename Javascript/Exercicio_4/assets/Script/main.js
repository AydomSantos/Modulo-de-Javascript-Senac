const btnInicia = document.querySelector(".btn");
btnInicia.addEventListener(
  "click",
  function (nomeAluno, primeiraNota, segundaNota, mediaNota) {
    try {
      nomeAluno = String(window.prompt("Digite o Seu Nome: "));
      primeiraNota = Number(window.prompt("Digite a Primeira Nota: "));
      segundaNota = Number(window.prompt("Digite o Segundo Numero: "));
      terceiraNota = Number(window.prompt("Digite o Terceiro Numero: "));
      mediaNota = (primeiraNota + segundaNota + terceiraNota) / 3;
      passouNota(mediaNota.toFixed(2));

      document.querySelector(
        ".text__result"
      ).innerHTML = `<h1>A media do aluno ${nomeAluno} : ${mediaNota}</h1>`;
    } catch (e) {
      console.log(e);
    }
  }
);

function passouNota(notaFinal) {
  try {
    if (notaFinal >= 6 || notaFinal >= 7) {
      document.querySelector(
        ".text__resultFinal"
      ).innerHTML = `<h2> Aluno Passou !!</h2>`;
    } else if (notaFinal >= 5) {
      document.querySelector(
        ".text__resultFinal"
      ).innerHTML = `<h2> Aluno esta Reculperação !!</h2>`;
    } else {
      document.querySelector(
        ".text__resultFinal"
      ).innerHTML = `<h2> Aluno Reprovou !!</h2>`;
    }
  } catch (e) {
    console.log(e);
  }
}
