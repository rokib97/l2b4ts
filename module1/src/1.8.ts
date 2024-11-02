{
  // destructuring

  const user = {
    id: 123,
    name: {
      firstName: ":Rokib",
      lastName: ":Hasan",
    },
    contact: "0187217212",
    address: "uganda",
  };

  const {
    id: newId,
    name: { lastName: endName },
    address,
  } = user;

  //   array

  const numbers: number[] = [12, 22, 424, 2343, 234, 344, 22, 23, 1, 1111];
  const [, , firstName, second, third, ...rest] = numbers;
}
