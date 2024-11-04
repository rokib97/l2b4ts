{
  /**
   * Task 3: Object Types, Type Alias, & Literal Types
     * Objective: Define a structured Person object using Type Aliases.

    Instructions:

    Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
     */

  type Person = {
    name: string;
    address: string;
    hair: string;
    eyeColor: string;
    income: number;
    expense: number;
    hobbies: string[];
    familyMembers: string[];
    job: string;
    skills: string[];
    maritalStatus: "single" | "married" | "divorced" | "widowed";
    friends: string[];
  };

  const examplePerson: Person = {
    name: "rokib",
    address: "dhaka",
    hair: "black",
    eyeColor: "Black",
    income: 400000,
    expense: 500000,
    hobbies: ["code", "fishing", "football"],
    familyMembers: ["Mini", "Sumon", "Nancy"],
    job: "WebDev",
    skills: ["js", "ts", "react"],
    maritalStatus: "single",
    friends: ["saki", "tonmoy", "rakib"],
  };
}
