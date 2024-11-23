const paginas = {
    inicio: `<h1 style="color: red;">Bem vindo a Pagina Inicial</h1>`,
    sobre: `<h1 style="color: #406ff3;">Bem vindo a Pagina Sobre</h1>`,
    servicos: `<h1 style="color: #6a778e;">Bem vindo a Pagina Serviços</h1>`,
    contato: `<h1 style="color: blue;">Bem vindo a Pagina Contatos</h1>`,  
};

function navegarPagina(pagina) {
  if (paginas[pagina]) {
    document.querySelector("#conteudo").innerHTML = paginas[pagina];
  } else {
    console.log("Página não encontrada.");
  }
}
