import promptSync from "prompt-sync";
const prompt = promptSync();

let books: { name: string, author: string, pages: number }[] = [];

function makeBook (name: string, author: string, pages: number): {
  name: string,
  author: string,
  pages: number
} {
  return {
    name: name,
    author: author,
    pages: pages
  }
}

function askBookIndex (): number {
  let index: number = -1;
  do {
    index = Number(prompt('Informe o índice do livro: '));
    if (index < 0 || index > books.length - 1) {
      console.log('Livro não encontrado!');
    }
  } while (index < 0 || index > books.length - 1);
  return index;
}

function createBook (): void {
  console.clear();
  let name = prompt('Informe o nome do livro: ');
  let author = prompt('Informe o nome do autor: ');
  let pages = Number(prompt('Informe o número de páginas: '));
  books.push(makeBook(name, author, pages));
  console.log('Livro #' + (books.length - 1) + ' incluído com sucesso!');
  prompt('Aperte enter para continuar.');
}

function showBook (): void {
  console.clear();
  let index = askBookIndex();
  let book = books[index];
  console.log('Índice: ' + index)
  console.log('Nome: ' + book.name)
  console.log('Autor: ' + book.author)
  console.log('Páginas: ' + book.pages)
  prompt('Aperte enter para continuar.');
}

function editBook (): void {
  console.clear();
  let index = askBookIndex();
  let book = books[index];
  let name = prompt('Informe o nome do livro: ' + '(' + book.name +')');
  if (name == '') {
    name = book.name;
  }
  let author = prompt('Informe o nome do autor: ' + '(' + book.author +')');
  if (author == '') {
    author = book.author;
  }
  let pages = Number(prompt('Informe o número de páginas: ' + '(' + book.pages +')'));
  if (pages == 0) {
    pages = book.pages;
  }
  book.name = name;
  book.author = author;
  book.pages = pages;
  console.log('Livro #' + (index) + ' atualizado com sucesso!');
  prompt('Aperte enter para continuar.');
}

function deleteBook (): void {
  console.clear();
  let index = askBookIndex();
  delete books[index];
  console.log('Livro #' + (index) + ' excluído com sucesso!');
  prompt('Aperte enter para continuar.');
}

function showCatalog (): void {
  console.clear();
  console.log('Lista de livros disponíveis no catálogo:')
  books.forEach(function (book, index) {
    console.log('#' + index + ' | ' + book.name + ', ' + book.author + ', ' + book.pages);
  });
  console.log('Fim do catálogo!');
  prompt('Aperte enter para continuar.');
}

function run (): void {
  let option: number = 0;
  do {
    console.clear();
    console.log('Selecione a opção desejada:');
    console.log('1 - Cadastrar livro');
    console.log('2 - Exibir livro');
    console.log('3 - Editar livro');
    console.log('4 - Excluir livro');
    console.log('5 - Exibir catálogo de livros');
    console.log('0 - Sair');

    let answer = prompt('');
    if (answer == '') {
      option = -1;
    } else {
      option = Number(answer);
    }

    switch (option) {
      case 0:
        break;
      case 1:
        createBook();
        break;
      case 2:
        showBook();
        break;
      case 3:
        editBook();
        break;
      case 4:
        deleteBook();
        break;
      case 5:
        showCatalog();
        break;
      default:
        console.log('Opção não reconhecida!');
        prompt('Aperte enter para continuar.');
        break;
    }
  } while (option != 0)
  console.log('Tchau!');
}

run();
