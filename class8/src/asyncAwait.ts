function buscarCoisaNoBanco () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        name: 'Christian'
      });
    }, 500);
  });
}

async function main () {
  let coisaDoBanco = await buscarCoisaNoBanco();
  console.log(coisaDoBanco);
}

main();
