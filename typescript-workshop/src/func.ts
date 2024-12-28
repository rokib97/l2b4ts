/**
 * Add two numbers
 *  @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of the two numbers
 * @example
 * add(1, 2)
 */
function add(a: number, b: number): number {
  return parseFloat(a + b.toFixed());
}
// console.log(add(24.42242, 56.77));

/**
 * @param name
 * @param message
 * @param messages
 * @returns void
 * @example
 * greet("John", "How are you doing?", "I am fine", "Thank you")
 */
function greet(
  name: string,
  message: string = "Welcome to the world",
  ...messages: string[]
): void {
  // console.log(`Hello ${name} ${message}`);
  // console.log(messages);
}
greet("John", "How are you doing?", "I am fine", "Thank you");
greet("John", "How are you doing?", "I am fine", "Thank you", "How are you?");

/**
 * @param {string} name - The name of the employee
 * @param {number} age - The age of the employee
 * @param {number} salary - The salary of the employee
 * @param {employeeRole} role - The role of the employee
 */
enum employeeRole {
  ADMIN = "ADMIN",
  USER = "USER",
  DEVELOPER = "DEVELOPER",
  HR = "HR",
}

const employee: {
  id: number;
  name: string;
  age: number;
  salary: number;
  role: employeeRole;
}[] = [];

employee.push({
  id: 1,
  name: "John",
  age: 24,
  salary: 10000,
  role: employeeRole.ADMIN,
});
employee.push({
  id: 2,
  name: "Doe",
  age: 25,
  salary: 20000,
  role: employeeRole.USER,
});
employee.push({
  id: 3,
  name: "Jane",
  age: 26,
  salary: 30000,
  role: employeeRole.DEVELOPER,
});

function findById(id: number): {
  id: number;
  name: string;
  age: number;
  salary: number;
  role: employeeRole;
} {
  const user = employee.find((emp) => emp.id === id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}

// console.log(findById(2));
