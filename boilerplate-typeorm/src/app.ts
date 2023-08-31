import DB from './db';
import promptSync from 'prompt-sync';

const prompt = promptSync();

async function main(): Promise<void> {
  await DB.initialize();

  let input: string = '';

  do {
    console.clear();
    console.log('1 - Opção 1');
    console.log('2 - Opção 2');
    console.log('3 - Opção 3');
    console.log('4 - Opção 4');
    console.log('0 - Sair');
    
    input = prompt('Selecione a opção desejada:');

    switch (input) {
      case '1':
        // Ação 1
        break;
      case '2':
        // Ação 2
        break;
      case '3':
        // Ação 3
        break;
      case '4':
        // Ação 4
        break;
    }

    prompt('Pressione enter para continuar');
  } while (input != '0');
}

main();
