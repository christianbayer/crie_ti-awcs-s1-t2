let lista = document.getElementById('lista');

async function buscarFeriados (ano) {
  let resposta = await fetch(`https://brasilapi.com.br/api/feriados/v1/${ano}`);
  let conteudo = await resposta.json();

  for (let feriado of conteudo) {
    let data = feriado.date.split('-').reverse().join('/');
    let nome = feriado.name;

    let item = document.createElement('li');
    item.innerText = `${data} - ${nome}`;

    lista.appendChild(item);
  }
}

for (let ano = 2023; ano <= 2026; ano++) {
  buscarFeriados(ano);
}
