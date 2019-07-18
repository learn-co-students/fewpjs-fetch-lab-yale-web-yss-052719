
let gotUrl = "https://anapioficeandfire.com/api/books"
function fetchBooks() {
  return fetch(gotUrl)
  .then(response => response.json())
  .then(books => {
    renderBooks(books)
  })
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
