import DB from './db';
import { Book } from './models/Book';
import { Bookshelf } from './models/Bookshelf';

async function main(): Promise<void> {
  await DB.initialize();

  // INSERT INTO "books"("title", "author", "description", "pages") VALUES ("O guia do mochileiro das galáxias", "Douglas Adams", NULL, 208);
  // let book = new Book();
  // book.title = "O guia do mochileiro das galáxias";
  // book.author = "Douglas Adams";
  // book.pages = 208;
  // await book.save();
  // console.log(book.id);

  // SELECT * FROM books;
  let books = await Book.find();
  console.log(books);

  // SELECT * FROM books WHERE id = 2;
  let book2 = await Book.findOneBy({ id: 2 });
  console.log(book2);

  if (book2) {
    // UPDATE books SET pages = 209 WHERE id = 2;
    book2.pages = 209;
    book2.save();

    // DELETE FROM books WHERE id = 2;
    book2.remove();
  }

  let bookshelf = new Bookshelf(1);
  bookshelf.save();

  let book = new Book();
  book.title = "O guia do mochileiro das galáxias";
  book.author = "Douglas Adams";
  book.pages = 208;
  book.bookshelf_id = 1;
  await book.save();


  // Nome: O guia do mochileiro das galáxias
  // Autor: Douglas Adams
  // Paginas: 208
}

main();
