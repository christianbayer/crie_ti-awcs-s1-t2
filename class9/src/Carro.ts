import { Veiculo } from './Veiculo';
import { ITerrestre } from './ITerrestre';

export class Carro extends Veiculo implements ITerrestre {
  public numeroPassageiros: number;
  public quantidadeRodas: number = 4;

  constructor(marca: string, modelo: string, ano: number, numeroPassageiros: number) {
    super(marca, modelo, ano);
    this.numeroPassageiros = numeroPassageiros;
  }

  // public ligar () {
  //   console.log('Girando a chave.. ligou!');
  // }
}
