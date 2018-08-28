// starter code

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(function(response) {
      console.log("--- books response ---");
      console.log("response:", response);
      return response.json();
    })
    .then(function(json) {
      console.log("--- then2 ---");
      console.log("json:", json);
      renderBooks(json);
    })
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h4 = document.createElement('h4')
    h4.innerHTML = `<h4>${book.name}</h4>`
    main.appendChild(h4)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  fetchHouses();
})

// parse json

function fetchHouses() {
  fetch('https://anapioficeandfire.com/api/houses')
    .then(function(response) {
      console.log("--- houses response ---");
      console.log("response:", response);
      return response.json();
    })
    .then(function(json) {
      console.log("--- then2 ---");
      console.log("json:", json);
      renderBooks(json);
    })
}

function renderHouses(json) {
  const main = document.querySelector('main')
  json.forEach(house => {
    const h4 = document.createElement('h4')
    h4.innerHTML = `<h4>${house.name}</h4>`
    main.appendChild(h4)
  })
}


// 1. All the Houses in Game of Thrones
// 2. The 5th book in the series
// 3. The 1031st character in the series
