// let person: {
//   name: string,
//   age: number,
//   email: string,
// } = {
//   name: 'Christian',
//   age: 25,
//   email: 'christian@gmail.com',
// };

function makePerson (name: string, age: number, email: string): {
  name: string,
  age: number,
  email: string
} {
  return {
    name: name,
    age: age,
    email: email
  }
}

let persons: { name: string, age: number, email: string }[] = [];
persons.push(makePerson('Christian', 25, 'christian@gmail.com'));
persons.push(makePerson('Mateus', 25, 'mateus@gmail.com'));

console.log(persons);
