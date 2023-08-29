import DB from './db';
import promptSync from 'prompt-sync';

const prompt = promptSync();

async function main(): Promise<void> {
  await DB.initialize();

  // Code goes here...
}

main();

async function menu () {

  let input: string = '';

  do {
    console.clear();
    console.log('1 - Listar clientes');
    console.log('2 - Cadastrar novo cliente');
    console.log('3 - Editar cliente');
    console.log('4 - Excluir cliente');
    console.log('5 - Listar quartos');
    console.log('6 - Cadastrar novo quarto');
    console.log('7 - Editar quarto');
    console.log('8 - Excluir quarto');
    console.log('0 - Sair');
    input = prompt('Selecione a opção desejada:');

    if (input == '1') {

    } else if (input == '2') {

    } else if (input == '3') {

    } else if (input == '4') {

    }

    switch (input) {
      case '1':
    }

    prompt('Pressione enter para continuar');
  } while (input != '0');
}
