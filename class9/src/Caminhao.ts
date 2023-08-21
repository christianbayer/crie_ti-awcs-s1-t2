import { Veiculo } from './Veiculo';
import { ITerrestre } from './ITerrestre';

export class Caminhao extends Veiculo implements ITerrestre {
  public numeroEixos: number;
  public quantidadeRodas: number;

  constructor(marca: string, modelo: string, ano: number, numeroEixos: number, quantidadeRodas: number) {
    super(marca, modelo, ano);
    this.numeroEixos = numeroEixos;
    this.quantidadeRodas = quantidadeRodas;
  }
}
