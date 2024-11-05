{
  // generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  //   type Owner = "bike" | "car" | "ship"; manually
  type Owner2 = keyof Vehicle;
  const person: Owner2 = "car";



  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y): X[Y] => {
    return obj[key];
  };


  const result = getPropertyValue(
    {
      name: "Rokib",
      age: 28,
      address: "Dhaka",
    },
    "address"
  );

  
  const resul2 = getPropertyValue(
    {
      model: "Yamaha",
      year: 2024,
    },
    "year"
  );
}
