//Book Object Script

// Creating the book object
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,

  // Method to get the title and author
  getTitleAndAuthor: function() {
    return `${this.title} by ${this.author}`;
  },

  // Method to update the year
  updateYear: function(newYear) {
    this.year = newYear;
  },

  // Method to get the title and year
  getTitleAndYear: function() {
    return `${this.title}, published in ${this.year}`;
  }
};

// Logging the book object
console.log("Book Object:", book);

// Logging the title and author
console.log("Title and Author:", book.getTitleAndAuthor());

// Updating the year
book.updateYear(2023);

// Logging the updated book object
console.log("Updated Book Object:", book);

// Logging the title and year
console.log("Title and Year:", book.getTitleAndYear());