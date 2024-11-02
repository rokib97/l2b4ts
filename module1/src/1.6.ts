// Learning function
// Normal Function
// Arrow Function

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}
add(2, 8);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// Object ==> function ==> method
const poorUser = {
  name: "Rokib",
  balance: 0,
  addBalance(balance: number): string {
    // return this.balance + balance; // return number
    return `My new balance is ${this.balance + balance}`; // return string
  },
};

// map
const myArr: number[] = [1, 4, 10];
const newArr: number[] = myArr.map((item: number): number => item * item);
