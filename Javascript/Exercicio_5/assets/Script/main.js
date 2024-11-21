const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  try {
    const valor = Number(window.prompt("Digite um valor numerico"));
    document.querySelector(".resultado").innerHTML = `
        O valor absoluto é: ${valorAbsoluto(valor)} <br>
        O valor inteiro é: ${valorInteira(valor)} <br>
        O valor mais próximo é: ${valormaisProximo(valor)} <br>
        A raiz quadrada é: ${valorRaizQuadrada(valor).toFixed(2)} <br>
        O valor cúbico é: ${valorCubico(valor).toFixed(2)} <br>
        O valor elevado ao quadrado é: ${valorLevadoaoQuadrado(valor)} <br>
        O valor elevado ao cubo é: ${valorLevadoaoCubo(valor)}
    `;
  } catch (e) {
    console.log(e);
  }
  
});

function valorAbsoluto(valor) {
  return Math.abs(valor);
}

function valorInteira(valor) {
  return Math.trunc(valor);
}

function valormaisProximo(valor) {
  return Math.round(valor);
}

function valorRaizQuadrada(valor) {
  return Math.sqrt(valor);
}

function valorCubico(valor) {
  return Math.cbrt(valor);
}

function valorLevadoaoQuadrado(valor) {
  return Math.pow(valor, 2);
}

function valorLevadoaoCubo(valor) {
  return Math.pow(valor, 3);
}
