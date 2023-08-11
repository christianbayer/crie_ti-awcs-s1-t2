export enum TiposDeTelefone {
  MOVEL = 'movel',
  FIXO = 'fixo'
}

export type TipoDeTelefone = TiposDeTelefone.MOVEL | TiposDeTelefone.FIXO;

export class Telefone {
  constructor(
    public numero: string,
    public tipo: TipoDeTelefone,
  ) { }
}
