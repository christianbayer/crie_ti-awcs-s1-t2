import { Customer } from '../models/Customer';
import promptSync from 'prompt-sync';

const prompt = promptSync();

export class CustomersController {

  async list () {
    let customers = await Customer.find();
    console.table(customers);
  }

  async create () {
    let name: string = prompt('Nome:');
    let email: string = prompt('E-mail:');
    let phone: string = prompt('Telefone:');
    let document: string = prompt('Documento:');

    let customer: Customer = await Customer.create({
      name,
      email,
      phone,
      document,
    }).save();

    console.log(`Cliente ID #${customer.id} criado com sucesso!`);
  }

  async edit () {
    let id: number = Number(prompt('Qual o ID?'));
    let customer: Customer | null = await Customer.findOneBy({ id: id });
    if (customer) {
      customer.name = prompt(`Nome (${customer.name}):`);
      customer.email = prompt(`E-mail (${customer.email}):`);
      customer.phone = prompt(`Telefone (${customer.phone}):`);
      customer.document = prompt(`Documento(${customer.document}):`);
      customer.save();
      console.log('Cliente atualizado com sucesso!');
    }
  }

  async delete () {
    let id: number = Number(prompt('Qual o ID?'));
    let result = await Customer.delete({ id: id });
    if (result.affected && result.affected > 0) {
      console.log('Cliente deletado com sucesso!');
    }
  }
}
