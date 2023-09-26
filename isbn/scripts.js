let isbnInput = document.getElementById('isbn-input');
let searchButton = document.getElementById('search');
let detailsWrapper = document.getElementById('details');
let coverImage = document.getElementById('cover');
let isbnSpan = document.getElementById('isbn');
let titleSpan = document.getElementById('title');
let subtitleSpan = document.getElementById('subtitle');
let synopsisSpan = document.getElementById('synopsis');
let pagesSpan = document.getElementById('pages');
let yearSpan = document.getElementById('year');
let authorsSpan = document.getElementById('authors');
let publisherSpan = document.getElementById('publisher');

searchButton.addEventListener('click', async (event) => {
  event.preventDefault();
  event.stopPropagation();

  let isbn = normalize(isbnInput.value);
  let isValid = validate(isbn);

  if (! isValid) {
    detailsWrapper.style.display = 'none';
    alert('O ISBN informado é inválido!');
    return;
  }

  let data = await search(isbn);

  if (! data) {
    detailsWrapper.style.display = 'none';
    alert('Nenhum dado foi encontrado para o ISBN informado!');
    return;
  }

  detailsWrapper.style.display = 'flex';

  coverImage.src = data.cover_url || 'https://missingpersons.icrc.org/sites/default/files/2021-11/00000_book.jpg';
  isbnSpan.innerText = data.isbn;
  titleSpan.innerText = data.title;
  subtitleSpan.innerText = data.subtitle || '-';
  synopsisSpan.innerText = data.synopsis || '-';
  pagesSpan.innerText = data.page_count || '-';
  yearSpan.innerText = data.year || '-';
  authorsSpan.innerText = data.authors.join(', ') || '-';
  publisherSpan.innerText = data.publisher;
});

// Remove any letters or symbols from the value, return only the numbers
function normalize (value) {
  return value.replace(/\D/g, '');
}

// Check if the ISBN has the right length
function validate (isbn) {
  console.log(isbn, isbn.length)
  if (isbn.length == 10 || isbn.length == 13) {
    return true;
  }
  return false;
}

// Fetch data from API
async function search (isbn) {
  let response = await fetch(`https://brasilapi.com.br/api/isbn/v1/${isbn}`);
  if (response.ok) {
    return await response.json();
  }
  return null;
}
