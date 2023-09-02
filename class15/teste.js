let lista = [
  { id: 1, nome: 'Christian' },
  { id: 2, nome: 'Fabricio' },
  { id: 3, nome: 'Mateus' },
]

// let nomes = [];
// for (let i = 0; i < lista.length; i++) {
//   nomes.push(lista[i].nome);
// }
// lista.forEach((item) => {
//   nomes.push(item.nome);
// })
// for (let item of lista) {
//   nomes.push(item.nome);
// }

let nomes = lista.map((item) => item.nome);
let novaLista = lista.map((item, index) => {
  return {
    index: index,
    id: item.id,
    nome: item.nome
  }
})

console.log(novaLista);
