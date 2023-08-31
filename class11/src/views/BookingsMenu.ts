import { BookingsController } from '../controllers/BookingsController';
import { Booking } from '../models/Booking';
import promptSync from 'prompt-sync';
import { Customer } from '../models/Customer';

const prompt = promptSync();

export class BookingsMenu {

  public controller: BookingsController;

  constructor () {
    this.controller = new BookingsController();
  }

  public show (): void {
    console.log('9 - Listar reservas');
    console.log('10 - Cadastrar novo reserva');
    console.log('11 - Editar reserva');
    console.log('12 - Excluir reserva');
  }

  public async execute (input: string): Promise<void> {
    switch (input) {
      case '9':
        await this.list();
        break;
      case '10':
        await this.create();
        break;
      // case '11':
      //   await this.edit();
      //   break;
      // case '12':
      //   await this.delete();
        break;
    }
  }

  private async list (): Promise<void> {
    let bookings: Booking[] = await this.controller.list();
    console.table(bookings);
  }

  private async create (): Promise<void> {
    let customerId: number = Number(prompt('Qual o ID do cliente? '));
    let roomId: number = Number(prompt('Qual o ID do quarto? '));
    let startDate: string = prompt('Data de check-in: ');
    let endDate: string = prompt('Data de check-out: ');
    // Formato de data: YYYY-MM-DD

    try {
      let booking: Booking = await this.controller.create(customerId, roomId, startDate, endDate);
      console.log(`Reserva ID #${booking.id} criado com sucesso!`);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  // private async edit (): Promise<void> {
  //   let id: number = Number(prompt('Qual o ID? '));
  //   let room: Room | null = await this.controller.find(id);
  //   if (room) {
  //     let number: string = prompt(`Número: (${room.number})`, room.number);
  //     let type: string = prompt(`Tipo: (${room.type})`, room.type);
  //     let capacity: number = Number(prompt(`Capacidade: (${room.capacity})`, String(room.capacity)));
  //     let price: number = Number(prompt(`Preço: (${room.price})`, String(room.price)));
  //     room = await this.controller.edit(room, number, type, capacity, price);
  //     console.log(`Quarto ID #${room.id} atualizado com sucesso!`);
  //   } else {
  //     console.log('Quarto não encontrado!');
  //   }
  // }

  // private async delete (): Promise<void> {
  //   let id: number = Number(prompt('Qual o ID? '));
  //   let room: Room | null = await this.controller.find(id);
  //   if (room) {
  //     await this.controller.delete(room);
  //     console.log(`Quarto ID #${id} excluído com sucesso!`);
  //   } else {
  //     console.log('Quarto não encontrado!');
  //   }
  // }
}
