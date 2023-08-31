import DB from './db';
import { CustomersMenu } from './views/CustomersMenu';
import { RoomsMenu } from './views/RoomsMenu';
import { BookingsMenu } from './views/BookingsMenu';
import promptSync from 'prompt-sync';

const prompt = promptSync();

async function main(): Promise<void> {
  await DB.initialize();

  // Inicializa os menus
  let customersMenu: CustomersMenu = new CustomersMenu();
  let roomsMenu: RoomsMenu = new RoomsMenu();
  let bookingsMenu: BookingsMenu = new BookingsMenu();

  // Armazena a escolha do usuário
  let input: string = '';

  do {
    console.clear();

    // Mostra as opções do menu
    customersMenu.show();
    roomsMenu.show();
    bookingsMenu.show();
    console.log('0 - Sair');

    // Captura a escolha do usuário
    input = prompt('Selecione a opção desejada:');

    if (input != '0') {
      // Executa a ação da escolha
      await customersMenu.execute(input);
      await roomsMenu.execute(input);
      await bookingsMenu.execute(input);

      prompt('Pressione enter para continuar');
    }
  } while (input != '0');
}

main();
