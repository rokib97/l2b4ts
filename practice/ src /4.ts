{
  /**
     * Task 4: Union and Intersection Types
    Objective: Create union and intersection types using interfaces.

    Instructions:

    Define interfaces Book and Magazine.
    Create:
    A type that is a union of Book and Magazine.
    A type that is an intersection of Book and Magazine.
     */

  interface Book {
    name: string;
    price: number;
    isTopSeller: boolean;
  }

  interface Magazine {
    name: string;
    price: number;
    year: number;
    author: string;
  }

  type Reading = Book | Magazine;
  const readingBook: Reading = {
    name: "X-Book",
    price: 180,
    isTopSeller: true,
    // year: 2020,
    // author: "Jk rolling",
  };

  type ReadingBookAndMagazine = Book & Magazine;
  const newBook: ReadingBookAndMagazine = {
    name: "Example",
    price: 280,
    isTopSeller: true,
    year: 2020,
    author: "Jk rolling",
  };
}
