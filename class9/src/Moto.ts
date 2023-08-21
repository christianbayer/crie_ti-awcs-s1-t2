import { Veiculo } from './Veiculo';
import { ITerrestre } from './ITerrestre';

export class Moto extends Veiculo implements ITerrestre {
  public podeEmpinar: boolean;
  public quantidadeRodas: number = 2;

  constructor (marca: string, modelo: string, ano: number, podeEmpinar: boolean) {
    super(marca, modelo, ano);
    this.podeEmpinar = podeEmpinar;
  }

  public empinar () {
    if (this.podeEmpinar) {
      console.log('Empinando e fazendo randandan!!!');
    } else {
      console.log('Essa moto não empina.');
    }
  }
}
