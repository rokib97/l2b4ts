{
  // conditional type
  //   one type depends on another type
  type a1 = number;
  type b1 = undefined;

  //   type x = a1 extends null ? true : false; conditional type
  type x = a1 extends null ? true : b1 extends undefined ? undefined : any;

  //   example
  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  //   car ase kina | bike ase kina | ship ase kina | tarcktor ase kina
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasBike = CheckVehicle<"bike">; //true
  type HasShip = CheckVehicle<"ship">; // true
  type HasCar = CheckVehicle<"car">; // true
  type HasPlane = CheckVehicle<"plane">; // true
  type HasTrack = CheckVehicle<"track">; // false
}
