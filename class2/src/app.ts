import promptSync from "prompt-sync";
const prompt = promptSync();

// Ex 1:
// Escreva um programa que calcula a soma dos números pares entre
// 1 e 50 e exiba o resultado no console.
let count = 0;
// for (let i = 0; i <= 50; i++) {
//   let res = i % 2;
//   if (res == 0) {
//     count = count + i;
//   }
// }
for (let i = 0; i <= 50; i += 2) {
  count += i;
}
console.log('Soma dos pares de 0 à 50: ', count);


// Ex 2:
// Escreva um programa que recebe um número inteiro como entrada e
// determina se ele é positivo, negativo ou zero. Exiba a resposta
// no console.
let num: number = Number(prompt("Digite um número: "));
if (num > 0) {
  console.log('O número é positivo!');
} else if (num < 0) {
  console.log('O número é negativo!');
} else {
  console.log('O número é igual a zero!');
}


// Ex 3:
// Escreva um programa que recebe uma string como entrada e conta o
// número de vogais presentes nessa string. Exiba o resultado no console.
let str: string = prompt('Escreva uma palavra (vogais): ');
// Transforma tudo para letras minúsculas:
str = str.toLowerCase()
// Remove acentuação das palavras:
str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

let vowelCount = 0;

for (let i = 0; i < str.length; i++) {
  // let letter = str[i];
  let letter = str.charAt(i);
  if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
    vowelCount++;
  }
}

console.log('Número de vogais: ', vowelCount);


// Ex 4:
// Escreva um programa que recebe uma palavra ou frase como entrada
// e determina se ela é um palíndromo ou não. Exiba o resultado no
// console. Obs: Um palíndromo é uma palavra ou frase que pode ser
// lida da mesma forma tanto da esquerda para a direita como da
// direita para a esquerda, desconsiderando espaços e diferenciação
// de letras maiúsculas e minúsculas, como por exemplo, “arara”,
// “ana”, “rever” e “A grama é amarga”.

let str2: string = prompt('Escreva uma palavra (palíndromo): ');
// Transforma tudo para letras minúsculas:
str2 = str2.toLowerCase()
// Remove acentuação das palavras:
str2 = str2.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
// Remove espaços
str2 = str2.replaceAll(' ', '');

let reversedStr: string = '';
for (let i = str2.length - 1; i >= 0; i--) {
  reversedStr += str2[i];
}
if (reversedStr == str2) {
  console.log('É um palíndromo!');
} else {
  console.log('Não é um palíndromo!');
}


// Ex 5:
// Escreva um programa que recebe a data de nascimento de uma
// pessoa como entrada (no formato "dd/mm/aaaa") e calcula a
// idade dessa pessoa com base na data atual. Exiba a idade
// calculada no console.

let date: string = prompt('Informe a data de nascimento: ');
let day: number = Number(date.substring(0, date.indexOf('/')));
let month: number = Number(date.substring(date.indexOf('/') + 1, date.lastIndexOf('/')));
let year: number = Number(date.substring(date.lastIndexOf('/') + 1));
let today = new Date();

let yearsDiff = today.getFullYear() - year;
let monthsDiff = (today.getMonth() + 1) - month;
let daysDiff = today.getDate() - day;

if (monthsDiff < 0 || daysDiff < 0) {
  yearsDiff -= 1;
}

console.log('A idade é: ', yearsDiff);
