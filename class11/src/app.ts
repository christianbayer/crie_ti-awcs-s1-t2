import DB from './db';
import { CustomersMenu } from './views/CustomersMenu';
import { RoomsMenu } from './views/RoomsMenu';
import promptSync from 'prompt-sync';
import { BookingsMenu } from './views/BookingsMenu';

const prompt = promptSync();

async function main(): Promise<void> {
  await DB.initialize();

  let customersMenu: CustomersMenu = new CustomersMenu();
  let roomsMenu: RoomsMenu = new RoomsMenu();
  let bookingsMenu: BookingsMenu = new BookingsMenu();

  let input: string = '';

  do {
    console.clear();
    customersMenu.show();
    roomsMenu.show();
    bookingsMenu.show();
    console.log('0 - Sair');

    input = prompt('Selecione a opção desejada:');

    if (input != '0') {
      await customersMenu.execute(input);
      await roomsMenu.execute(input);
      await bookingsMenu.execute(input);

      prompt('Pressione enter para continuar');
    }
  } while (input != '0');
}

main();
