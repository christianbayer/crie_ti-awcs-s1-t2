import { Account } from './Account';

function main () {
  const account = new Account('Christian');

  account.add(100);
  account.sub(50);

  console.log(account);
}

main();
