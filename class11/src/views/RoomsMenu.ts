import { RoomsController } from '../controllers/RoomsController';
import { Room } from '../models/Room';
import promptSync from 'prompt-sync';

const prompt = promptSync();

export class RoomsMenu {

  public controller: RoomsController;

  constructor () {
    this.controller = new RoomsController();
  }

  public show (): void {
    console.log('5 - Listar quartos');
    console.log('6 - Cadastrar novo quarto');
    console.log('7 - Editar quarto');
    console.log('8 - Excluir quarto');
  }

  public async execute (input: string): Promise<void> {
    switch (input) {
      case '5':
        await this.list();
        break;
      case '6':
        await this.create();
        break;
      case '7':
        await this.edit();
        break;
      case '8':
        await this.delete();
        break;
    }
  }

  private async list (): Promise<void> {
    let rooms: Room[] = await this.controller.list();
    console.table(rooms);
  }

  private async create (): Promise<void> {
    let number: string = prompt('Número: ');
    let type: string = prompt('Tipo: ');
    let capacity: number = Number(prompt('Capacidade: '));
    let price: number = Number(prompt('Preço: '));
    let room: Room = await this.controller.create(number, type, capacity, price);
    console.log(`Quarto ID #${room.id} criado com sucesso!`);
  }

  private async edit (): Promise<void> {
    let id: number = Number(prompt('Qual o ID? '));
    let room: Room | null = await this.controller.find(id);
    if (room) {
      let number: string = prompt(`Número: (${room.number})`, room.number);
      let type: string = prompt(`Tipo: (${room.type})`, room.type);
      let capacity: number = Number(prompt(`Capacidade: (${room.capacity})`, String(room.capacity)));
      let price: number = Number(prompt(`Preço: (${room.price})`, String(room.price)));
      room = await this.controller.edit(room, number, type, capacity, price);
      console.log(`Quarto ID #${room.id} atualizado com sucesso!`);
    } else {
      console.log('Quarto não encontrado!');
    }
  }

  private async delete (): Promise<void> {
    let id: number = Number(prompt('Qual o ID? '));
    let room: Room | null = await this.controller.find(id);
    if (room) {
      await this.controller.delete(room);
      console.log(`Quarto ID #${id} excluído com sucesso!`);
    } else {
      console.log('Quarto não encontrado!');
    }
  }
}
