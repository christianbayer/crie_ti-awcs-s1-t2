export abstract class Veiculo {
  public marca: string;
  public modelo: string;
  public ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  public mover (distancia: number) {
    console.log(`${this.constructor.name}, marca ${this.marca}, modelo ${this.modelo} está movendo ${distancia} metros.`);
  }

  // public abstract ligar(): void;
}
