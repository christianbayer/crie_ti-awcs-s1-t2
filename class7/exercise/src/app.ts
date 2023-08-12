import { Account } from './Account';

function main () {
  const account: Account = new Account('Christian');

  account.add(100);
  account.sub(50);
  account.sub(50);
  account.add(30);
  // account.sub(50);

  console.log(`The final amount is $${account.balance.toFixed(2)}`);
}

main();
