// let data: any;

// data = "Hello";
// data = 123;
// data = { key: "value" };

// console.log(data.toUpperCase()); // no complie-time error . but runtime errro if data is not a string

let data: unknown;

data = "Hello";
data = 123;
data = { key: "value" };

if (typeof data == "string") {
  console.log(data.toLowerCase());
}

function processAsString(input: unknown) {
  if (typeof input !== "string") {
    throw new Error("Input must be string");
  }
  console.log(input.toLowerCase());
}

function processData(input: unknown) {
  if (typeof input === "string") {
    console.log(input.toLowerCase());
  } else if (typeof input === "number") {
    console.log(input.toFixed());
  } else if (Array.isArray(input)) {
    console.log(input.length);
  } else {
    console.log("Unknown Type");
  }
}
