let languages: string[] = ['Typescript', 'JavaScript', 'HTML', 'CSS'];

// Adicionar item em uma posição específica
// languages[1] = 'Java';

// Adicionar item ao final do array
languages.push('Java');

// Remover item do final do array
let removed = languages.pop();
console.log('Removed 1:', removed);

// Adicionar item no ínicio
languages.unshift('Go');

// Remover item do início
let removed2 = languages.shift();
console.log('Removed 2: ', removed2);

// Remover um item do array (remove o "JavaScript")
let removed3 = languages.splice(1, 1);
console.log(removed3);

// Adicionar um item na posição 1 do array
languages.splice(1, 0, 'Python');


// for (let i = 0; i < languages.length; i++) {
//   let language: string = languages[i];
//   console.log(language);
// }

// let callback = function (language: string, i: number) {
//   console.log(language, i);
// };
// languages.forEach(callback);

languages.forEach(function (language: string, i: number) {
  console.log(language, i);
});

// for (let language of languages) {
//   console.log(language);
// }

// for (let key in languages) {
//   let i: number = Number(key);
//   console.log(i);
// }
