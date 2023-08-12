export class Endereco {
  constructor(
    public logradouro: string,
    public numero: string,
    public cep: string,
    public cidade: string,
    public estado: string,
    public pais: string = 'Brasil',
    public complemento?: string,
  ) { }
}
