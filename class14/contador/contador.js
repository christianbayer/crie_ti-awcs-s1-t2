let botaoMenos = document.getElementById('menos');
let botaoMais = document.getElementById('mais');
let spanNumero = document.getElementById('numero');
let contador = 0;

botaoMenos.addEventListener('click', () => {
  contador -= 1;
  atualizarNumero();
});

botaoMais.addEventListener('click', () => {
  contador += 1;
  atualizarNumero();
});

function atualizarNumero() {
  spanNumero.textContent = contador;
}
