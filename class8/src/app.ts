import fs from 'fs';
import path from 'path';

const fsPromises = fs.promises;

// let retornoDoArquivo = fsPromises.readFile(path.resolve('src/users.json'));
// retornoDoArquivo.then(function (dadosDoArquivo) {
//   console.log(dadosDoArquivo.toString());
// })

async function main () {
  let dadosDoArquivo = await fsPromises.readFile(path.resolve('src/users.json'));
  console.log(dadosDoArquivo.toString());
}
main();
