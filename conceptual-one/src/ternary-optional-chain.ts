{
  let isAdmin = false;
  const message: string | number = isAdmin ? "Welcome Admin" : "Welcome User";

  //   optional chaining
  type Data = {
    name?: {
      firstName?: string;
    };
    address: string;
  };

  const data: Data = {
    address: "Dhaka",
  };

  const value: string | undefined = data?.name?.firstName ?? "Not Found";
  console.log(value);
}
