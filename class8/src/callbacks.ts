import fs from 'fs';
import path from 'path';

console.log('Antes do FS');

let users: any = [];

// Abre o arquivo e pega o conteúdo
fs.readFile(path.resolve('src/users.json'), function (error, data: Buffer) {

  // Transforma o Buffer em string
  users = JSON.parse(data.toString());

  // Adiciona 2 novos itens ao array
  users.push({ name: 'Jonathan', age: 26, occupation: 'Engenheiro Ambiental' });
  users.push({ name: 'Maria', age: 19, occupation: 'Desenvolvedor' });

  // console.log(users);

  // Transforma o array de objetos em texto
  let text = JSON.stringify(users);

  // Atualiza o arquivo
  fs.writeFile(path.resolve('src/users.json'), text, function (error) {
    // console.log(text);
  });
});

console.log('Depois do FS');

console.log(users);


