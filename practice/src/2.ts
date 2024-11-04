{
  /**
     * Task 2: Functions, Optional, and Literal Types
    Objective: Create a function with parameters and an optional literal type.
    Instructions:
    Define a function that takes:
    name (string)
    age (number)
    role (optional, with type 'admin' | 'user' | 'guest')
    The function should log these values or perform a basic action.

     */
  const myFun = (
    name: string,
    age: number,
    role: "admin" | "user" | "guest" = "guest"
  ): string => {
    return `Name : ${name} , age : ${age}, role : ${role}`;
  };

  const res = myFun("rokib", 27);
  console.log(res);
}
