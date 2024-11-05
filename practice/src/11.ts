{
  /**
     * Task 11: Unknown Type
    Objective: Handle different types with the unknown type.

    Instructions:

    Write a function processData(data: unknown) that:
    Checks if data is a string and returns the uppercased version.
    If data is a number, returns the square of it.
     */

  const processData = (data: unknown): string | number | undefined => {
    if (typeof data === "string") {
      return data.toUpperCase();
    }
    if (typeof data === "number") {
      return data * data;
    }
    return undefined;
  };

  const res = processData("hello") as string;
  const res2 = processData(6) as number;
  const res3 = processData(true);
  console.log({
    res,
    res2,
    res3,
  });
}
