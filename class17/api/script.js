async function buscarPaises () {
  // let retorno = await fetch('http://177.44.248.43:80/locations-api/countries/');
  // let paises = await retorno.json();

  // for (let pais of paises) {
  //   let retorno = await fetch(`http://177.44.248.43:80/locations-api/countries/${pais.code_iso2}/states`)
  //   let estados = await retorno.json();
  //   console.log(estados);
  // }

  let retorno = await fetch('http://177.44.248.43:80/locations-api/countries/br/states');
  let estados = await retorno.json();
  console.log(estados);

  // console.log(paises);
}

buscarPaises();
