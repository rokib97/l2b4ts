{
  //  interface =>  type vs interface
  // Object => type | interface
  //Array => type
  //Function => type

  //   object
  type StudentOneType = {
    name: string;
    age: number;
  };
  type StudentOneTypeWithRoll = StudentOneType & { role: string };

  const studentOne: StudentOneTypeWithRoll = {
    name: "rokib",
    age: 27,
    role: "captain",
  };
  interface StudentOneInterface {
    name: string;
    age: number;
  }
  interface StudentONeInterfaceWithRoll extends StudentOneInterface {
    role: string;
  }
  const studentTwo: StudentONeInterfaceWithRoll = {
    name: "rokib",
    age: 27,
    role: "captain",
  };

  //   mix type and interface
  interface MixWithType extends StudentOneTypeWithRoll {
    id: number;
  }
  interface NewProperty {
    random: number | string;
  }

  type MixWithInterface = StudentOneType & NewProperty;
  const mixWithTypeExample: MixWithInterface = {
    name: "rokib",
    age: 26,
    random: 33,
  };

  //   array
  type RollNumbersType = number[];
  interface RollNumbersInterface {
    [index: number]: number;
  }
  const rollNumbersOne: RollNumbersType = [22, 232, 3, 5, 6, 11];
  const rollNumbersTwo: RollNumbersInterface = [22, 232, 3, 5, 6, 11];

  //  function
  type AddTwoNumType = (numOne: number, numTwo: number) => number;
  const addTwoNumType: AddTwoNumType = (a, b) => a + b;

  interface AddTwoNumInterface {
    (a: number, b: number): number;
  }
  const addTwoNumInterface: AddTwoNumInterface = (x, y) => x + y;
}
