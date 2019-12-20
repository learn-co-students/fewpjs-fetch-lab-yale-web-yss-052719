function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(res => renderBooks(res)
)
}

function renderBooks(json) {
  let main = document.querySelector("main")
  json.forEach(function(book){
  main.innerHTML += `<p>${book.name}</p>`
    console.log(book)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
