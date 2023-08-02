// const promptSync = require('prompt-sync');
import * as promptSync from "prompt-sync";
const prompt = promptSync();

console.log("Hello World!");

let firstName: string = "Christian";

console.log("Hello, " + firstName + "!");

let num1: number = 5;
let num2: number = 5.4;
let num3: number = -5;

console.log(num1, num2, num3);

let bool: boolean = false;

console.log(bool);

let age: number;
do {
  age = Number(prompt("Quantos anos você tem?"));
} while (isNaN(age));

if (age >= 18) {
  console.log("Você é maior de 18 anos");
} else {
  console.log("Você é menor de idade");
}
