{
  // type assertion | Type Narrowing
  let anything: any;

  anything = "Anything....";
  (anything as string).indexOf("A");

  anything = 333;
  (anything as number).toFixed();

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      return `The convertedValue is ${parseFloat(value) * 1000}`;
    }

    if (typeof value === "number") {
      return value * 100;
    }
  };

  const resOne = kgToGram("1000") as string;
  const resTwo = kgToGram("1000") as number;

  //   try catch
  type CustomError = {
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
