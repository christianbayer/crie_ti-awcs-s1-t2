let stateSelect = document.getElementById('state');
let citySelect = document.getElementById('city');

let states = [
  { code: 'RS', name: 'Rio Grande do Sul', cities: ['Lajeado', 'Porto Alegre'] },
  { code: 'SP', name: 'São Paulo', cities: ['São Paulo', 'Campinas'] },
  { code: 'SC', name: 'Santa Catarina', cities: ['Balneário Camboriú', 'Florianópolis'] },
  { code: 'PR', name: 'Paraná', cities: ['Curitiba'] },
  { code: 'RJ', name: 'Rio de Janeiro', cities: ['Rio de Janeiro'] },
];

function setStates () {
  let selectOption = document.createElement('option');
  selectOption.innerText = 'Selecione';
  stateSelect.appendChild(selectOption);

  for (let state of states) {
    let option = document.createElement('option');
    option.value = state.code;
    option.innerText = state.name;

    stateSelect.appendChild(option);
  }
}

function setCities (stateCode) {
  let selectedState = states.find((item) => item.code == stateCode);
  let cities = selectedState.cities;

  citySelect.innerHTML = '';

  let selectOption = document.createElement('option');
  selectOption.innerText = 'Selecione';
  citySelect.appendChild(selectOption);

  for (let city of cities) {
    let option = document.createElement('option');
    option.value = city;
    option.innerText = city;

    citySelect.appendChild(option);
  }
}

stateSelect.addEventListener('change', () => {
  setCities(stateSelect.value);
});

setStates();
