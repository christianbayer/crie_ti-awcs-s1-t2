import { Pessoa } from './Pessoa';
import { Endereco } from './Endereco';
import { TiposDeTelefone } from './Telefone';

let pessoa1 = new Pessoa('Christian', 'christian@gmail.com', undefined, undefined, 'Estadunidense');
let pessoa2 = new Pessoa('Mateus', 'mateus@gmail.com');

let endereco1 = new Endereco('Rua A', '1', '95914-014', 'Lajeado', 'Rio Grande do Sul');
pessoa1.endereco = endereco1;

pessoa1.adicionarTelefone('+5551999999999', TiposDeTelefone.MOVEL);
pessoa1.adicionarTelefone('+5551999999998', TiposDeTelefone.FIXO);

console.log(pessoa1);

// console.log(pessoa1, pessoa2);

// pessoa1.endereco
