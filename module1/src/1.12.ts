// nullable type

const searchName = (value: string | null) => {
  if (value) {
    console.log(`Searching...`);
  } else {
    console.log("There is nothing to search...");
  }
};

searchName(null);

// unknown type
const getSpeedMeterPerSecond = (value: unknown) => {
  if (typeof value === "number") {
    console.log(`The Speed is ${(value * 1000) / 3600} ms^-1`);
  } else if (typeof value === "string") {
    const convertedSpeed = (parseFloat(value.split(" ")[0]) * 1000) / 3600;
    console.log(`The Speed is ${convertedSpeed} ms^-1`);
  } else {
    console.log("Wrong Input");
  }
};
getSpeedMeterPerSecond("1000 ms^-1");

// never type
const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error........");
