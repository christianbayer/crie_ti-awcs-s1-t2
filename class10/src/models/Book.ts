import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Bookshelf } from './Bookshelf';

@Entity('books')
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public author: string;

  @Column({
    type: 'text',
    nullable: true
  })
  public description: string;

  @Column()
  public pages: number;

  @Column()
  public bookshelf_id: number;

  // @ManyToOne(function() { return Bookshelf; })
  @ManyToOne(() => Bookshelf)
  @JoinColumn({ name: 'bookshelf_id' })
  public bookshelf: Bookshelf;
}

// Função nomeada
// let funcA = function (a: string) {
//   return 'text: ' + a;
// }

// Arrow function curta
// let funcB = (b: string) => 'text' + b;

// Arrow function "completa"
// let funcC = (c: string) => {
//   return 'text' + c;
// };
