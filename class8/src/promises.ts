console.log('Olá aqui de cima');

function logar (): void {
  console.log('Olá dentro da função');
}

console.log('Olá após a declaração da função');

let testePromise = new Promise(function (resolve, reject) {
  if (true) {
    setTimeout(function () {
      resolve('Olá de dentro da promise');
    }, 3000);
  } else {
    reject('Algo deu errado');
  }
});

testePromise.then(function (qualquerCoisa) {
  // Promise deu certo
  console.log(qualquerCoisa);
}).catch(function (qualquerCoisa2) {
  // Promise deu errado
  console.log(qualquerCoisa2);
});

console.log(testePromise);

logar();
