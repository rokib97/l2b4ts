// You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.
{
  type TBook = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const book: TBook = {
    title: "My awesome book",
    author: "Chinku",
    publishedYear: 2069,
  };

  function isRecentBook(book: TBook): boolean {
    return new Date().getFullYear() - book.publishedYear <= 5;
  }
}
