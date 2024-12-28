{
  const numbers: number[] = [1.222, 2.3232, 3.23234];
  numbers.push(5);

  numbers.forEach((number) => {
    // console.log(number.toFixed(2));
  });

  const names: string[] = numbers.map((number) => number.toString());
  //   console.log(names);
}
