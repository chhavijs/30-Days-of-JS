//Library Object Script

// Creating the library object
let library = {
  name: "City Library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949
    }
  ]
};

// Logging the library object
console.log("Library Object:", library);

// Logging the name of the library
console.log("Library Name:", library.name);

// Logging the titles of all the books in the library
library.books.forEach(book => {
  console.log("Book Title:", book.title);
});