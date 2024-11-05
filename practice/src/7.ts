{
  /**
     *  Task 7: Type Assertion and Narrowing
        Objective: Write a function that behaves differently based on the input type.

        Instructions:

        Create a function that accepts a parameter of type string | number.
        The function should:
        Return the length if the input is a string.
        Return the square if the input is a number.
     */

  const funStringNum = (
    value: string | number
  ): string | number | undefined => {
    if (typeof value === "string") {
      return value.length;
    }
    if (typeof value === "number") {
      return value * value;
    }
  };

  const str = funStringNum("Hello") as string;
  const square = funStringNum(55) as number;
}
