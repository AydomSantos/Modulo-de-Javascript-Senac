const btn = document.querySelector(".btn");
const saidaDados = document.querySelector('.saida');

btn.addEventListener('click', () => {
    const entradaDados = document.querySelector('.entrada').value; 
    const numero = parseInt(entradaDados); 

    if (isNaN(numero)) {
        saidaDados.innerHTML = ` <p style="color: rgb(219, 41, 6);">Por favor, insira um número válido.</p>`;
        return;
    };

    if(numero < 0){
        saidaDados.innerHTML = `<p style="color: rgb(219, 41, 6);"> Por favor, Somente numeros Positivos</p>`;
        return;
    }

    if (numero % 2 === 0) {
        saidaDados.innerHTML = `<p style="color: rgb(24, 219, 6);">O valor ${numero} é Ímpar.</p>`;
    } else {
        saidaDados.innerHTML = `<p style="color: rgb(224, 57, 23);">O valor ${numero} é Ímpar.</p>`;
    };
});



