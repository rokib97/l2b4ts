type Person = {
  id: number;
  name: string;
  age: number;
};

type Employee = Person & {
  role: "employee";
  salary: number;
};

type Customer = Person & {
  role: "customer";
  balance: number;
};

const newUser: Customer = {
  id: 1,
  name: "John",
  age: 24,
  role: "customer",
  balance: 1000,
};
