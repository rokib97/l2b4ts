{
  // mapped type

  const arrOfNumbers: number[] = [23, 3, 3223, 232, 44];

  const arrayOfStrings: string[] = arrOfNumbers.map((value: number): string =>
    value.toString()
  );
  //   console.log(arrayOfStrings);

  type AreaNumbers = {
    height: number;
    width: number;
  };

  type AreaString = {
    [key in keyof AreaNumbers]: number;
  };

  //   lookup type
  type Height = AreaNumbers["height"];

  //   generic mapped
  type User<T> = {
    [key in keyof T]: T[key];
  };

  const userOne: User<{ name: string; age: number }> = {
    name: "rokib",
    age: 27,
  };
  const userTwo: User<{ name: string; age: number; isMarried: boolean }> = {
    name: "rokib",
    age: 27,
    isMarried: false,
  };
}
