
/*
const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    const nome = window.prompt("Digite o seu nome: ")
    document.querySelector('.p')
    .innerHTML = `
    Ola,
    <span>
    <strong>${nome}</strong> 
    </span>
    É um grande prazer te conhecer &#128513`; 
});

const btnLimpar = document.querySelector('.btn__limpa');
btnLimpar.addEventListener('click', function(){
    document.querySelector('.p').innerHTML = 'Saida de Dados';
});
*/
/*
const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    try {
        const numero = Number(window.prompt("Digite o seu nome: "))

        const dobro = numero * 2;
        const metade = numero / 2;
        document.querySelector('.p')
            .innerHTML =
            `
    o numero digitado foi ${numero}<br>
    o dobro e ${dobro}<br>
    a metade e ${metade}

    `;

    } catch (e){
        console.log(e)
    }

});

*/

const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    try {
        const numero = Number(window.prompt("Digite um numero: "))
        const numeroDois = Number(window.prompt("Digite outro numero: "))
        document.querySelector('.p')
            .innerHTML =
            `
            A soma de ${numero} + ${numeroDois} : ${numero + numeroDois}`
            ;

    } catch (e) {
        console.log(e)
    }

});


const btnLimpar = document.querySelector('.btn__limpa');
btnLimpar.addEventListener('click', function () {
    document.querySelector('.p').innerHTML = 'Saida de Dados';
});

