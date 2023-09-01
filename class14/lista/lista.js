let lista = document.getElementById('lista');
let botaoAdicionar = document.getElementById('adicionar');
let botoesExcluir = document.getElementsByClassName('remover');
let spansTexto = document.getElementsByClassName('texto');

botaoAdicionar.addEventListener('click', () => {
  let retorno = prompt('Descreva o item');
  if (retorno) {
    let botao = document.createElement('button');
    botao.innerText = 'Excluir';
    botao.classList.add('remover');
    botao.addEventListener('click', removerItem);
    let span = document.createElement('span');
    span.innerText = retorno;
    span.classList.add('texto');
    span.addEventListener('dblclick', editarItem)
    let li = document.createElement('li');
    li.appendChild(span);
    li.appendChild(botao);
    lista.appendChild(li);
  }
});

for (let botaoExcluir of botoesExcluir) {
  botaoExcluir.addEventListener('click', removerItem);
}

function removerItem (event) {
  let botaoClicado = event.target;
  let itemDaLista = botaoClicado.parentElement;
  itemDaLista.remove();
}

for (let spanTexto of spansTexto) {
  spanTexto.addEventListener('dblclick', editarItem);
}

function editarItem (event) {
  let spanClicado = event.target;
  let textoAtual = spanClicado.innerText;
  let textoNovo = prompt('Descreva o item', textoAtual);
  if (textoNovo) {
    spanClicado.innerText = textoNovo;
  }
}
