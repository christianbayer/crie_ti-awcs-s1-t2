let grades: number[] = [70, 80, 65, 40, 80];

// Ex 1: Calcular a média das notas
let sum: number = 0;
grades.forEach(function (grade) {
  sum += grade;
});
let average: number = Math.round(sum / grades.length);
console.log('A nota média é:', average);

// Em 1 linha (modo hard):
let average2 = Math.round(grades.reduce((t, g) => t + g, 0) / grades.length);
console.log('A nota média é:', average2);


// Ex 2: maior e menor nota
let lowerGrade: number = 100;
let higherGrade: number = 0;
grades.forEach(function (grade) {
  if (lowerGrade > grade) {
    lowerGrade = grade;
  }
  if (higherGrade < grade) {
    higherGrade = grade;
  }
});
console.log('A maior nota é:', higherGrade);
console.log('A menor nota é:', lowerGrade);

// Sem for:
let sortedGrades = [...grades].sort();
let lowerGrade2 = sortedGrades[0];
let higherGrade2 = sortedGrades[sortedGrades.length - 1];
console.log('A maior nota é:', higherGrade2);
console.log('A menor nota é:', lowerGrade2);


// Ex 3: obter a mediana (número do meio)

// Ordenando o array "na mão":
let sorted = grades.slice(0);
for (let i = 0; i < sorted.length; i++) {
  for (let j = i + 1; j < sorted.length; j++) {
    let temp: number = 0;
    if (sorted[i] > sorted[j]) {
      temp = sorted[i];
      sorted[i] = sorted[j];
      sorted[j] = temp;
    }
  }
}

let median: number = 0;
let medianIndex: number = Math.floor((grades.length - 1) / 2);
if (grades.length % 2 == 0) {
  median = (sortedGrades[medianIndex] + sortedGrades[medianIndex + 1]) / 2;
} else {
  median = sortedGrades[median];
}
console.log(medianIndex, median);

// Ex 4: obter a moda (número que mais repete)
let occurrences: number[] = [];
grades.forEach(function (grade) {
  if (occurrences[grade] == undefined) {
    occurrences[grade] = 0;
  }
  occurrences[grade]++;
});
let mode: number;
console.log('A moda é: ', occurrences);
occurrences.sort()
console.log('A moda é: ', occurrences);
