import DB from './db';

async function main(): Promise<void> {
  await DB.initialize();

  // Code goes here...
}

main();
