import { Carro } from './Carro';
import { Caminhao } from './Caminhao';
import { Moto } from './Moto';
import { Barco } from './Barco';
import { ITerrestre } from './ITerrestre';
// import { Veiculo } from './Veiculo';

let carro: Carro = new Carro('VW', 'Gol', 2022, 5);
let caminhao: Caminhao = new Caminhao('Volvo', 'C30', 2010, 4, 8);
let moto: Moto = new Moto('Honda', 'CBR 600', 2022, true);
let barco: Barco = new Barco('Fibrafort', 'Focker 160', 2010);

// let patinete = new Veiculo('Mor', 'Patinenete', 2000);
// console.log(patinete);

console.log(carro);
console.log(caminhao);
console.log(moto);
console.log(barco);

moto.mover(10);
carro.mover(5);
barco.mover(200);

moto.empinar();

// Barco não é um veículo terrestre, logo, não vai compilar
let veiculosTerrestres: ITerrestre[] = [
  carro,
  caminhao,
  moto,
  // barco
];

