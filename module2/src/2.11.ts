{
  // utility types
  //Pick utility type
  type Person = {
    name: string;
    age: number;
    email?: string;
    readonly contact: string;
  };
  type Name = Pick<Person, "name" | "age" | "email">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //   Require
  type PersonRequire = Required<Person>;

  //Partial
  type PersonPartial = Partial<Person>;

  //ReadOnly
  type PersonReadOnly = Readonly<Person>;

  //   Record
  type MyObj = Record<string, string>;
  const myObj: MyObj = {
    a: "rokib",
    b: "hasan",
    c: "120",
  };
  const EmptyObj: Record<string, unknown> = {};
}
