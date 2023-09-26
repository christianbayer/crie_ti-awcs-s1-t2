// Pega a DIV que é display da calculadora
let displayElement = document.getElementById('display');

// Pega todos os botões de número
let numbersElements = document.querySelectorAll('.number');

// Pega todos os botões de operadores
let operatorsElements = document.querySelectorAll('.operator');

// Pega todos os botões de ação
let actionsElements = document.querySelectorAll('.action');

let output = '0';
let operator;
let memory;

// Adiciona o handler do evento de clique nos números
numbersElements.forEach((numberElement) => {
  numberElement.addEventListener('click', numberClick);
});

// Adiciona o handler do evento de clique nos operadores
operatorsElements.forEach((operatorElement) => {
  operatorElement.addEventListener('click', operatorClick);
});

// Adiciona o handler do evento de clique nas ações
actionsElements.forEach((actionElement) => {
  actionElement.addEventListener('click', actionClick);
})

function numberClick (event) {
  let numberElement = event.target;
  let number = numberElement.dataset.number;
  if (output.replace('.', '').length == 9) {
    return;
  }
  if (output == '0' && number != '.') {
    output = '';
  }
  output += number;
  updateDisplay();
}

function operatorClick (event) {
  let operatorElement = event.target;
  let op = operatorElement.dataset.operator;
  if (op == '=') {
    operate();
    operator = null;
  } else {
    if (operator) {
      operate();
    }
    operator = op;
    memory = output;
    output = '0';
    updateDisplay();
  }
}

function actionClick (event) {
  let actionElement = event.target;
  let action = actionElement.dataset.action;
  if (action == 'clear') {
    output = '0';
    operator = null;
    memory = null;
  } else if (action == 'change') {
    output = (parseFloat(output) * -1).toString();
  } else if (action == 'percentage') {
    output = (parseFloat(output) / 100).toString();
  }
  updateDisplay();
}

function operate () {
  if (! operator) {
    return;
  }
  let result;
  let a = parseFloat(memory);
  let b = parseFloat(output);
  if (operator == '+') {
    result = a + b;
  } else if (operator == '-') {
    result = a - b;
  } else if (operator == '*') {
    result = a * b;
  } else if (operator == '/') {
    result = a / b;
  }
  output = result.toString();
  updateDisplay();
}

function updateDisplay () {
  displayElement.innerText = output;
}
