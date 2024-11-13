{
  /**
     * ask 13: Generics with Functions and Interfaces
    Objective: Use generics to handle different types.

    Instructions:

    Create a generic function that:
    
    Accepts an array of any type.
    Returns a new array with duplicate values removed.
     */

  const removeDuplicate = <T>(array: T[]): T[] => {
    return array.filter(
      (item: T, index: number) => array.indexOf(item) === index
    );
    // const uniqueArray: T[] = [];
    // for (const element of array) {
    //   if (!uniqueArray.includes(element)) {     
    //     uniqueArray.push(element);
    //   }
    // }
    // return uniqueArray;
  };

  const res = removeDuplicate([1, 2, 2, 3, 4, 4, 5]);
  const res2 = removeDuplicate(["apple", "ornage", "apple", "mango"]);
  console.table({ res, res2 });
}
