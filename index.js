// starter code

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => console.log(json));
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

// parse json

function printHouseNames()

function fetchHouses() {
  fetch('https://anapioficeandfire.com/api/houses')
    .then(resp => resp.json())
    .then(json => console.log(json));
}



// 1. All the Houses in Game of Thrones
// 2. The 5th book in the series
// 3. The 1031st character in the series