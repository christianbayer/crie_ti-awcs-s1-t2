import { Customer } from '../models/Customer';
import promptSync from 'prompt-sync';

const prompt = promptSync();

export class CustomersController {

  async list (): Promise<Customer[]> {
    return await Customer.find();
  }

  async create (name: string, email: string, phone: string, document: string): Promise<Customer> {
    return await Customer.create({
      name,
      email,
      phone,
      document,
    }).save();
  }

  async find (id: number): Promise<Customer|null> {
    return await Customer.findOneBy({ id });
  }

  async edit (customer: Customer, name: string, email: string, phone: string, document: string): Promise<Customer> {
    customer.name = name;
    customer.email = email;
    customer.phone = phone;
    customer.document = document;
    await customer.save();

    return customer;
  }

  async delete (customer: Customer): Promise<void> {
    await customer.remove();
  }
}
