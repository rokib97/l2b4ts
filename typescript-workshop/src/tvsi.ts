// type vs interface
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  isPower: boolean;
}

const admin: Admin = {
  id: 1,
  name: "rokib",
  isPower: true,
};

type User2 = {
  id: number;
  name: string;
};

type Admin2 = User2 & {
  role: string;
  id: 1;
  name: "rokib";
};

type AddFunction = (a: number, b: number) => number;
const add: AddFunction = (a, b) => a + b;

interface IAddFucntion {
  (a: number, b: number): number;
}

type ID = string | number;

interface IID {
  value: string | number;
}
