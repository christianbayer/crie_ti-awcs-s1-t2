import DB from './db';
import { CustomersMenu } from './views/CustomersMenu';
import promptSync from 'prompt-sync';

const prompt = promptSync();

async function main(): Promise<void> {
  await DB.initialize();

  let customersMenu: CustomersMenu = new CustomersMenu();

  let input: string = '';

  do {
    console.clear();
    customersMenu.show();
    console.log('0 - Sair');
    input = prompt('Selecione a opção desejada:');

    await customersMenu.execute(input);

    prompt('Pressione enter para continuar');
  } while (input != '0');
}

main();
