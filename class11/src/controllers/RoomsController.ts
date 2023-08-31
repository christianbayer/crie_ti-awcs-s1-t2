import { Room } from '../models/Room';

export class RoomsController {
  async list (): Promise<Room[]> {
    return await Room.find();
  }

  async create (number: string, type: string, capacity: number, price: number): Promise<Room> {
    return await Room.create({
      number,
      type,
      capacity,
      price,
    }).save();
  }

  async find (id: number): Promise<Room|null> {
    return await Room.findOneBy({ id });
  }

  async edit (room: Room, number: string, type: string, capacity: number, price: number): Promise<Room> {
    room.number = number;
    room.type = type;
    room.capacity = capacity;
    room.price = price;
    await room.save();

    return room;
  }

  async delete (room: Room): Promise<void> {
    await room.remove();
  }
}
