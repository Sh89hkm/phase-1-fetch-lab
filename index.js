function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
          .then((resp) => resp.json())
          .then((json) => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

/*
// Adding a number before each book name
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach((book, index) => {                // Adding the number
    const h2 = document.createElement('h2');
    h2.innerHTML = `${index + 1}. ${book.name}`; // Adding the number
    main.appendChild(h2);
  });
}
*/