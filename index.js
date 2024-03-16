// eslint-disable-next-line no-unused-vars

import {
  listlink,
  addlink,
  contactlink,
  addBook,
  booksAdded,
} from './modules/navigation.js';

import {
  handleAddLinkClick,
  handleContactLinkClick,
  handleListLinkClick,
} from './modules/eventlisteners.js';

class books {
  constructor() {
    this.booksData = [];

    this.addBook = addBook;
    this.booksAdded = booksAdded;

    this.addBook.addEventListener('submit', (e) => {
      e.preventDefault();

      this.title = this.addBook.querySelector(
        'input[type="text"][placeholder="Title"]',
      ).value;

      this.author = this.addBook.querySelector(
        'input[type="text"][placeholder="Author"]',
      ).value;

      this.addBooks();
    });
  }

  addBooks() {
    const newBook = {
      title: this.title,
      author: this.author,
    };

    this.booksData.push(newBook);

    this.renderbooks();
  }

  removeBook(e) {
    this.booksData = this.booksData.filter((a, index) => index !== parseInt(e.target.id));
    this.renderbooks();
  }

  renderbooks() {
    this.booksAdded.innerHTML = this.booksData
      .map((bookData, index) => `
          <div class="books">
              <div class="title-author">
                  <p class="title">"${bookData.title}"</p>
                  <p>by</p>
                  <p class="author">${bookData.author}</p>
              </div>
              <button class="remove-btn" id="${index}">remove</button>
          </div> `)
      .join('');
    const removebtn = document.querySelectorAll('.remove-btn');
    removebtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.removeBook(e);
      });
    });

    this.booksAdded.style.display = this.booksData.length === 0 ? 'none' : 'block';
  }
}

const muneeb = new books();

listlink.addEventListener('click', handleListLinkClick);
contactlink.addEventListener('click', handleContactLinkClick);
addlink.addEventListener('click', handleAddLinkClick);
