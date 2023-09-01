let botaoMagico = document.getElementById('botao-magico');
let removerCor = document.getElementById('remover-cor');
let corAtual;

botaoMagico.addEventListener('click', (event) => {
  // alert('Clicou!');
  document.body.style.backgroundColor = gerarCorAleatoria();
});

removerCor.addEventListener('click', () => {
  document.body.style.backgroundColor = null;
});

removerCor.addEventListener('mouseenter', () => {
  corAtual = document.body.style.backgroundColor;
  document.body.style.backgroundColor = null;
});

removerCor.addEventListener('mouseleave', () => {
  document.body.style.backgroundColor = corAtual;
});

function gerarCorAleatoria () {
  return '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
}
