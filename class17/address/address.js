let stateSelect = document.getElementById('state');
let citySelect = document.getElementById('city');
let zipCodeInput = document.getElementById('zip_code');
let districtInput = document.getElementById('district');
let streetInput = document.getElementById('street');

// Busca os estados do Brasil (BR)
async function getStates () {
  let response = await fetch('http://177.44.248.43/locations-api/countries/br/states');
  let states = await response.json();
  return states;
}

// Busca as cidades do estado selecionado
async function getCities (code) {
  let response = await fetch(`http://177.44.248.43/locations-api/countries/br/states/${code}/cities`);
  let cities = await response.json();
  return cities;
}

// Busca as informações do CEP informado
async function getZip (zipCode) {
  let response = await fetch(`https://brasilapi.com.br/api/cep/v1/${zipCode}`);
  if (response.status != 200) {
    alert('CEP não encontrado!');
    throw new Error('CEP não encontrado!');
  }
  return await response.json();
}

// Popula a lista de estados do select
async function setStates () {
  let states = await getStates();

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

// Popula a lista de cidades do estado selecionado
async function setCities (stateCode) {
  let cities = await getCities(stateCode);

  // Limpa a lista de cidades a cada troca de estado
  citySelect.innerHTML = '';

  let selectOption = document.createElement('option');
  selectOption.innerText = 'Selecione';
  citySelect.appendChild(selectOption);

  for (let city of cities) {
    let option = document.createElement('option');
    option.value = city.name;
    option.innerText = city.name;
    citySelect.appendChild(option);
  }
}

// Escuta o evento de troca de estado
stateSelect.addEventListener('change', () => {
  setCities(stateSelect.value);
});

// Escuta o evento de alteração de valor do campo de CEP
zipCodeInput.addEventListener('input', async () => {
  // Limpa o valor tirando o "-" da string
  let zipCode = zipCodeInput.value.replace('-', '');

  // CEP somente é válido se tiver 8 dígitos
  if (zipCode.length == 8) {
    try {
      // Busca as informações do CEP
      let result = await getZip(zipCode);

      // Define o estado
      stateSelect.value = result.state;

      // Atualiza a lista de cidades do estado do CEP
      await setCities(stateSelect.value);

      // Define a cidade
      citySelect.value = result.city;

      // Define o bairro e rua se possuir, ou limpa o valor se não possuir
      districtInput.value = result.neighborhood || '';
      streetInput.value = result.street || '';
    } catch (error) {
      // Se o CEP não for encontrado, limpa os dados de endereço
      stateSelect.value = '';
      citySelect.value = '';
      districtInput.value = '';
      streetInput.value = '';
    }
  }
});

setStates();
