// // bookManagement.js
// import {
//     booksAdded,
//     addBook,
//   } from "./modules/navigation.js";

  
// class BookManagement {
//   constructor() {
//     this.booksData = [];
//     this.addBook = addBook;
//     this.booksAdded = booksAdded;
//     this.addBook.addEventListener("submit", (e) => {
//       e.preventDefault();
//       this.title = this.addBook.querySelector(
//         'input[type="text"][placeholder="Title"]'
//       ).value;
//       this.author = this.addBook.querySelector(
//         'input[type="text"][placeholder="Author"]'
//       ).value;
//       this.addBooks();
//     });
//   }

//   addBooks() {
//     let newBook = {
//       title: this.title,
//       author: this.author,
//     };
//     this.booksData.push(newBook);
//     this.renderBooks();
//   }

//   removeBook(e) {
//     this.booksData = this.booksData.filter((a, index) => {
//       return index !== parseInt(e.target.id);
//     });
//     this.renderBooks();
//   }

//   renderBooks() {
//     this.booksAdded.innerHTML = this.booksData
//       .map((bookData, index) => {
//         return `
//           <div class="books">
//               <div class="title-author">
//                   <p class="title">"${bookData.title}"</p>
//                   <p>by</p>
//                   <p class="author">${bookData.author}</p>
//               </div>
//               <button class="remove-btn" id="${index}">remove</button>
//           </div> `;
//       })
//       .join("");
//     const removebtn = document.querySelectorAll(".remove-btn");
//     removebtn.forEach((btn) => {
//       btn.addEventListener("click", (e) => {
//         this.removeBook(e);
//       });
//     });

//     this.booksAdded.style.display =
//       this.booksData.length === 0 ? "none" : "block";
//   }
// }

// export default BookManagement;
