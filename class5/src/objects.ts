let person: {
  name: string,
  age: number,
  email: string,
  phone: {
    number: string,
    type: string
  },
  hobbies?: string[], // ? define que a propriedade é opcional nesse objeto
  scream: Function
} = {
  name: 'Christian',
  age: 25,
  email: 'christian@gmail.com',
  phone: {
    number: '+5551999999999',
    type: 'mobile'
  },
  scream: function () {
    console.log('AAAAAAA');
  }
};

// Imprime o nome da pessoa
console.log(person.name);
console.log(person['name']);

// Executa função do objeto (gritar)
person.scream();

// Alterar propriedade do objeto
person.name = "Jonathan";
// person.phone.number = '+55119999999999'
// person.hobbies.push('Testando');
console.log(person.name);

