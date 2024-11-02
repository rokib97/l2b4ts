{
  // ternary op
  const age: number = 16;
  if (age > 18) {
    console.log("adult already..");
  } else {
    console.log("Not adult yet");
  }

  const isAdult = age >= 18 ? "Adult" : "not adult";
  console.log(isAdult);

  //   nullish coalescing op
  //null | undefined ==> decision making

  const isAuthenticate = "";
  const resOne = isAuthenticate ?? "Guest";
  const resTwo = isAuthenticate ? isAuthenticate : "Guest";
  console.log({ resOne, resTwo });

  //   optional chaining
  type NewUser = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const userOne: NewUser = {
    name: "Rokib",
    address: {
      city: "Dhaka",
      road: "24/7",
      presentAddress: "Dhaka",
    },
  };

  const permanentAddress =
    userOne?.address?.permanentAddress ?? "No permanent address";
  console.log(permanentAddress);
}
