


function Saida_de_dados(){
    const nome = window.prompt("Digite o seu Nome: ")

    return window.alert(`Ola ${nome}`)
}

document.querySelector(".btn").addEventListener('click', Saida_de_dados)


