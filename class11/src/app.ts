import DB from './db';
import { CustomersController } from './controllers/CustomersController'
import promptSync from 'prompt-sync';

const prompt = promptSync();

async function main(): Promise<void> {
  await DB.initialize();

  menu();
}

main();

async function menu () {

  let customersController = new CustomersController();

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
      await customersController.list();
    } else if (input == '2') {
      await customersController.create();
    } else if (input == '3') {
      await customersController.edit();
    } else if (input == '4') {
      await customersController.delete();
    }

    switch (input) {
      case '1':
    }

    prompt('Pressione enter para continuar');
  } while (input != '0');
}
