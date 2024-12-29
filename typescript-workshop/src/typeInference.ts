const user = {
  id: 1,
  name: "John",
  age: 24,
  salary: 10000,
};

// function printUser(input: typeof user) {
//   console.log(user.name);
// }

const nums = [1, 2, 3, 4, 5];
const doubleNums = nums.map((num) => num * 2);

function validateForm(formData: {
  email: string;
  age: number;
  isAdult: boolean;
}) {
  const { email, age, isAdult } = formData;
  return email.includes("@") && age > 18;
}
