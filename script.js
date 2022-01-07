// Global variables

const myForm = document.querySelector('.myForm');
const saveButton = document.querySelector('.save');
const newBtn = document.querySelector('.newb');
const formDisplay = document.querySelector('.form');
const card = document.querySelector('.cardContainer');
const myLibrary = [];

const book = (author, title, numOfPages, rating) => ({
  author,
  title,
  numOfPages,
  rating,
});

saveButton.addEventListener('click', (e) => {
  e.preventDefault();
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const numOfPages = document.getElementById('pages').value;
  const rating = document.querySelector('.rate').value;
  const h1 = document.createElement('h3');
  const h2 = document.createElement('h3');
  const h3 = document.createElement('h3');
  const h4 = document.createElement('h3');
  const readButton = document.createElement('button');
  readButton.classList.add('default');
  const newCard = document.createElement('div');
  const bot = document.createElement('div');
  bot.classList.add('bot');
  const x = document.createElement('button');
  const newBook = book(author, title, numOfPages, rating);
  myLibrary.push(newBook);
  const index = myLibrary.indexOf(newBook);
  console.log(index);

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
