import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Book } from './Book';

@Entity('bookshelfs')
export class Bookshelf extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public number: number;

  @OneToMany(() => Book, (book) => book.bookshelf_id)
  public bookshelf: Bookshelf;

  constructor (number: number) {
    super();
    this.number = number;
  }
}
