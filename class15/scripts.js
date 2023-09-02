let words = [
  'html5',
  'css3',
  'javascript',
  'postgresql',
  'react',
  'typescript',
];

words = [ ...words, ...words ]
  .map((word) => {
    return {
      word: word,
      random: Math.random()
    }
  })
  .sort((a, b) => a.random - b.random)
  .map(obj => obj.word);

let container = document.querySelector('.container');
let moving = [];

for (let word of words) {
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  let innerDiv = document.createElement('div');
  innerDiv.classList.add('inner');

  let frontDiv = document.createElement('div');
  frontDiv.classList.add('front');

  let backDiv = document.createElement('div');
  backDiv.classList.add('back');

  let image = document.createElement('img');
  image.src = `assets/${word}.svg`;

  cardDiv.appendChild(innerDiv);
  innerDiv.appendChild(frontDiv);
  innerDiv.appendChild(backDiv);
  frontDiv.appendChild(image);

  container.appendChild(cardDiv);

  cardDiv.addEventListener('click', (event) => {
    innerDiv.classList.add('flip');

    moving.push(word);

    console.log(moving);

    if (moving.length > 1) {
      if (moving[0] == moving[1]) {
        document.querySelectorAll('.flip').forEach((element) => {
          element.classList.add('right');
          element.classList.remove('flip');
        });
      } else {
        document.querySelectorAll('.flip').forEach((element) => {
          console.log(element);
          setTimeout(() => {
            element.parentElement.classList.add('shake');
            setTimeout(() => {
              element.classList.remove('flip');
              element.parentElement.classList.remove('shake');
            }, 500);
          }, 500);
        });
      }

      moving = [];
    }
  });
}

