{
  // basic data type
  const age: number = 19;
  const myName: string = "Rokib";
  const isActive: boolean = true;

  // array
  const numbers: number[] = [1, 2, 3, 4, 5, 6];
  const names: string[] = ["rokib", "hasan"];

  // tuple
  const info: [string, string, number, number, boolean, null, undefined] = [
    "rokib",
    "hasan",
    40,
    35,
    true,
    null,
    undefined,
  ];

  // object with type alias
  type PersonType = {
    name: string;
    age: number | string;
    isActive: boolean;
    company: string;
  };
  const person: PersonType = {
    name: "rokib",
    age: "32",
    isActive: true,
    company: "Phero",
  };
}
