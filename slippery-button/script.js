let botao = document.getElementById('botao');

botao.addEventListener('mouseover', (event) => {
  botao.style.top = gerarPosicaoAleatoria(0, window.innerHeight - botao.offsetHeight) + 'px';
  botao.style.left = gerarPosicaoAleatoria(0, window.innerWidth - botao.offsetWidth) + 'px';
});

botao.addEventListener('click', (event) => {
  alert('Parabéns!');
})

function gerarPosicaoAleatoria (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
