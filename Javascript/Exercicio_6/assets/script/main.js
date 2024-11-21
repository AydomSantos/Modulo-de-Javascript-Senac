const btnConta = document.querySelector('.btn__conta');
const btnReniciar = document.querySelector('.btn__conta--limpa');
var cont = 0;
btnConta.addEventListener('click', function(){
    
    document.querySelector('.span__exibir').innerHTML = 
    `
        ${cont += 1}
    `
})

btnReniciar.addEventListener('click', function(){
    document.querySelector('.span__exibir').innerHTML = 
    `
        ${cont = 0}
    ` 
})
