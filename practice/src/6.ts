{
  /**
     * Task 6: Spread and Rest Operators, Destructuring
    Objective: Write a function that uses the rest operator for variable-length arguments.

    Instructions:

    Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.

     */

  const sumOfAllNum = (...arr: number[]): number => {
    return arr.reduce((acc: number, curr: number) => acc + curr, 0);
  };

  const res: number = sumOfAllNum(12, 27, 37);
  console.log(res);
}
