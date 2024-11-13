{
  // array
  const rolls: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const newRolls: number[] = [...rolls, 11, 12];

  // object

  type PersonType = {
    name: string;
    age: number | string;
    isActive: boolean;
    company: string;
    salary?: number; // optional
  };
  const person: PersonType = {
    name: "rokib",
    age: "32",
    isActive: true,
    company: "Phero",
  };
  const person2: PersonType = {
    ...person,
    salary: 120000,
  };

  //   rest operator
  const [first, ...rest] = [2, 4, 6, 7, 89, 7, 9];
}
