import { Veiculo } from './Veiculo';

export class Barco extends Veiculo {
  public mover (distancia: number) {
    console.log(`${this.constructor.name}, marca ${this.marca}, modelo ${this.modelo} está movendo ${distancia} milhas náuticas.`);
  }
}
