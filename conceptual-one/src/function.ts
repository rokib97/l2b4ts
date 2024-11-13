{
  // normal fun | arrow fun
  function multiply(num1: number, num2: number): number {
    return num1 * num2;
  }

  const result: number = multiply(2, 3);
  console.log(result);

  const multTwoNum = (a: number, b: number): number => {
    return a * b;
  };
  const res2: number = multTwoNum(10, 2);
  console.log(res2);
}
