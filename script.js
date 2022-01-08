// Global variables
const myForm = document.querySelector('.myForm');
const saveButton = document.querySelector('.save');
const newBtn = document.querySelector('.newb');
const formDisplay = document.querySelector('.form');
const card = document.querySelector('.cardContainer');
const msg = document.createElement('h4');
const inputs = document.querySelectorAll('input');
const myLibrary = [];

const book = (author, title, numOfPages, rating) => ({
  author,
  title,
  numOfPages,
  rating,
});

inputs.forEach((inp) =>
  inp.addEventListener('change', () => {
    const rating = document.querySelector('.rate');
    if (rating.value < 1 || rating.value > 10) {
      msg.textContent = 'Choose number between 1-10!';
      rating.parentNode.insertAdjacentElement('beforeend', msg);
      rating.classList.add('error');
      msg.classList.remove('msg');
      saveButton.disabled = true;
    } else {
      msg.classList.add('msg');
      rating.classList.remove('error');
      saveButton.disabled = false;
    }
  })
);

saveButton.addEventListener('click', (e) => {
  e.preventDefault();
  // input variables
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const numOfPages = document.getElementById('pages').value;
  const rating = document.querySelector('.rate').value;
  // new elements
  const h1 = document.createElement('h3');
  const h2 = document.createElement('h3');
  const h3 = document.createElement('h3');
  const h4 = document.createElement('h3');
  const readButton = document.createElement('button');
  const newCard = document.createElement('div');
  const bot = document.createElement('div');
  const x = document.createElement('button');
  // new classes
  readButton.classList.add('default');
  bot.classList.add('bot');

  // book object
  const newBook = book(author, title, numOfPages, rating);
  myLibrary.push(newBook);
  const index = myLibrary.indexOf(newBook);

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
  readButton.addEventListener('click', () => {
    if (!readButton.classList.contains('notRead')) {
      readButton.classList.add('notRead');
      readButton.classList.remove('read');
      readButton.textContent = 'Not Read';
    } else {
      readButton.classList.remove('notRead');
      readButton.classList.add('read');
      readButton.textContent = 'Read';
    }
  });
  // eslint-disable-next-line array-callback-return
  myLibrary.filter(() => {
    newCard.classList.add('book');
    newCard.setAttribute('data-id', index);
    h1.textContent = `${newBook.author}`;
    h2.textContent = `"${newBook.title}"`;
    h3.textContent = `${newBook.numOfPages} pages`;
    h4.textContent = `Your rating ${newBook.rating}/10`;
    x.textContent = 'Remove';
    x.classList.add('rmvBtn');
    readButton.textContent = 'Have you read it?';

    card.appendChild(newCard);
    newCard.append(h1, h2, h3, h4, readButton, bot);
    bot.append(x);
  });

  myForm.reset();
  formDisplay.classList.remove('newForm');
});

newBtn.addEventListener('click', () => {
  formDisplay.classList.add('newForm');
});
