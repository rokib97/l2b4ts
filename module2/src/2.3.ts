{
  // generic type
  type GenericArray<T> = Array<T>;

  const names: GenericArray<string> = ["rokib", "sakib", "hasan"];
  const numbers: GenericArray<number> = [12, 23, 234, 44, 44];
  const boolArray: GenericArray<boolean> = [true, false, true];

  //   array of object
  type User = {
    name: string;
    age: number;
  };
  const myArr: GenericArray<User> = [
    { name: "rokib", age: 25 },
    { name: "Hasan", age: 36 },
    { name: "rokibul", age: 22 },
  ];

  //   tuple
  type GenericTuple<X, Y, Z> = [X, Y, Z];
  const person: GenericTuple<string, number, number> = ["rokib", 32, 16];
  interface UserTuple {
    id: number;
    email: string;
  }

  const details: GenericTuple<string, number, UserTuple> = [
    "rokib",
    32,
    { id: 12, email: "ab@gmail.com" },
  ];
}
