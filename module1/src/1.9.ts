{
  // Type Alias
  type Student = {
    name: string;
    age: number;
    address: string;
    town: string;
    contact?: string;
  };

  const userOne: Student = {
    name: "rokib",
    age: 25,
    address: "dhaka",
    town: "Jamalpur",
    contact: "02382326376763",
  };
  const userTwo: Student = {
    name: "Hasan",
    age: 24,
    address: "dhaka",
    town: "Dewangonj",
  };

  // string
  type UserName = string;
  const userName: UserName = "Rokib";

  type IsAdmin = boolean;
  const isAdmin: IsAdmin = true;

  //   function
  type AddNum = (a: number, b: number) => number;
  const addTwoNum: AddNum = (x, y) => x + y;

  type SquareFunc = (a: number) => number;
  const myArr: number[] = [2, 5, 6, 8, 9];
  const square: SquareFunc = (num) => num * num;
  const myNewArr: number[] = myArr.map(square);
}
