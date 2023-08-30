import { CustomersController } from '../controllers/CustomersController';
import { Customer } from '../models/Customer';
import promptSync from 'prompt-sync';

const prompt = promptSync();

export class CustomersMenu {

  public controller: CustomersController;

  constructor () {
    this.controller = new CustomersController();
  }

  public show () {
    console.log('1 - Listar clientes');
    console.log('2 - Cadastrar novo cliente');
    console.log('3 - Editar cliente');
    console.log('4 - Excluir cliente');
  }

  public async execute (input: string) {
    switch (input) {
      case '1':
        await this.list();
        break;
      case '2':
        await this.create();
        break;
      case '3':
        await this.edit();
        break;
      case '4':
        await this.delete();
        break;
    }
  }

  private async list (): Promise<void> {
    let customers: Customer[] = await this.controller.list();
    console.table(customers);
  }

  private async create (): Promise<void> {
    let name: string = prompt('Nome: ');
    let email: string = prompt('E-mail: ');
    let phone: string = prompt('Telefone: ');
    let document: string = prompt('Documento: ');

    let customer: Customer = await this.controller.create(name, email, phone, document);

    console.log(`Cliente ID #${customer.id} criado com sucesso!`);
  }

  private async edit (): Promise<void> {
    let id: number = Number(prompt('Qual o ID? '));
    let customer: Customer | null = await this.controller.find(id);
    if (customer) {
      let name = prompt(`Nome (${customer.name}): `, customer.name);
      let email = prompt(`E-mail (${customer.email}): `, customer.email);
      let phone = prompt(`Telefone (${customer.phone}): `, customer.phone);
      let document = prompt(`Documento(${customer.document}): `, customer.document);
      customer = await this.controller.edit(customer, name, email, phone, document);
      console.log(`Cliente ID #${customer.id} atualizado com sucesso!`);
    } else {
      console.log('Cliente não encontrado!');
    }
  }

  private async delete (): Promise<void> {
    let id: number = Number(prompt('Qual o ID? '));
    let customer: Customer | null = await this.controller.find(id);
    if (customer) {
      await this.controller.delete(customer);
      console.log(`Cliente ID #${id} excluído com sucesso!`);
    } else {
      console.log('Cliente não encontrado!');
    }
  }
}
