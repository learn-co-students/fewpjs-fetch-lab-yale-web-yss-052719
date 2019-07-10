function fetchBooks() {
  let x = fetch('https://anapioficeandfire.com/api/books')
  .then(resp => {return resp.json()})
  .then(json => {return renderBooks(7)})
  console.log(x)
  return x
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
