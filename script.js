const author = document.getElementById('author');
const title = document.getElementById('title');
const numOfPages = document.getElementById('pages');
const rating = document.querySelector('.rate');
const myForm = document.querySelector('.myForm');
const saveButton = document.querySelector('.save');
const newBtn = document.querySelector('.newb');
const formDisplay = document.querySelector('.form');

const myLibrary = [];

function Book() {
  this.title = title.value;
  this.author = author.value;
  this.numOfPages = numOfPages.value;
  this.rating = rating.value;
}

// info about the saved book
Book.prototype.name = function () {
  return this.author;
};
Book.prototype.heading = function () {
  return this.title;
};
Book.prototype.pages = function () {
  return `${this.numOfPages} pages`;
};
Book.prototype.rate = function () {
  return `Your rating ${this.rating}/10`;
};

saveButton.addEventListener('click', (e) => {
  e.preventDefault();
  const card = document.querySelector('.cardContainer');
  const newBook = new Book();
  myLibrary.push(newBook);
  const index = myLibrary.indexOf(newBook);
  console.log(index);
  const newCard = document.createElement('card');
  const x = document.createElement('button');
  x.textContent = 'X';
  x.classList.add('rmv');

  x.addEventListener('click', () => {
    const id = parseInt(newCard.getAttribute('data-id'));

    if (id === index) {
      const removeElement = card.querySelector(`[data-id = "${index}"]`);
      console.log(removeElement);
      removeElement.remove();
      myLibrary.splice(removeElement, 1);
      console.log(myLibrary);
    }
  });
  // eslint-disable-next-line array-callback-return
  myLibrary.filter((book) => {
    const h1 = document.createElement('h3');
    const h2 = document.createElement('h3');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h3');

    newCard.classList.add('book');
    newCard.setAttribute('data-id', index);
    h1.textContent = book.name();
    h2.textContent = book.heading();
    h3.textContent = book.pages();
    h4.textContent = book.rate();

    const readButton = document.createElement('button');
    readButton.textContent = 'Have you read it?';
    readButton.addEventListener('click', () => {
      if (!readButton.classList.contains('rd')) {
        readButton.classList.add('rd');
        readButton.textContent = 'Not Read';
      } else {
        readButton.classList.remove('rd');
        readButton.textContent = 'Read';
      }
    });

    card.appendChild(newCard);
    newCard.append(h1, h2, h3, h4, readButton);
    newCard.appendChild(x);
  });

  myForm.reset();
  formDisplay.classList.remove('newForm');
});

newBtn.addEventListener('click', () => {
  formDisplay.classList.add('newForm');
});
