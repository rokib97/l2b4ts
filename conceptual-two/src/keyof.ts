{
  type TBook = {
    title: string;
    author: string;
    yearPublished: number;
  };

  //   Use "keyof"

  //   type keyOf = keyof TBook;

  function getBookProperty<T, K extends keyof T>(book: T, key: K): T[K] {
    return book[key];
  }
  const myBook: TBook = {
    title: "Awesome Ts",
    author: "Random",
    yearPublished: 1995,
  };

  const result = getBookProperty(myBook, "title");
  console.log(result);
}
