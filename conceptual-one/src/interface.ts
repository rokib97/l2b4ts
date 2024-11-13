{
  interface IPerson {
    readonly name: string;
    age: number | string;
    isActive: boolean;
  }
  interface IPerson {
    company: string;
  }
  const person: IPerson = {
    name: "rokib",
    age: 35,
    isActive: true,
    company: "Phero", // merge automatically
  };

  //   person.name = "Hello"; // read only
}
