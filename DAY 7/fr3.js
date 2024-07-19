//Object Iteration Script

// Creating the book object
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960
};

// Iterating over the properties using for...in loop
console.log("Using for...in loop:");
for (let key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(`${key}: ${book[key]}`);
  }
}

// Using Object.keys and Object.values to log keys and values
console.log("Using Object.keys and Object.values:");
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));