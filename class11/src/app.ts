import DB from './db';
import { Customer } from './models/Customer';
import { Room } from './models/Room';
import { Booking } from './models/Booking';

async function main(): Promise<void> {
  await DB.initialize();

  let customer: Customer = new Customer();
  customer.name = 'Teste da Silva';
  customer.document = '123456789';
  customer.phone = '5551999999999';
  customer.email = 'teste@silva.com';
  await customer.save();

  let room: Room = new Room();
  room.number = '101';
  room.capacity = 2;
  room.type = 'Double Standard';
  room.price = 100;
  await room.save();

  let booking: Booking = new Booking();
  booking.start_date = '2023-08-23';
  booking.end_date = '2023-08-24';
  booking.amount = 100;
  booking.customer_id = customer.id;
  booking.room_id = room.id;
  await booking.save();



  // Code goes here...
}

main();
