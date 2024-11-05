{
  /**
     * Task 9: Optional Chaining
    Objective: Use optional chaining with nested objects.

    Instructions:

    Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.
     */
  interface Address {
    road: string;
    city: string;
  }
  interface Emplyee {
    name: string;
    age?: number;
    address?: Address;
    hasBike?: boolean;
  }
  const getEmployeeCity = (employee: Emplyee): string => {
    return `Emplyee city is ${employee?.address?.city ?? "Not Found"}`;
  };

  const employee: Emplyee = {
    name: "rokib",
    age: 21,
    address: {
      road: "221b",
      city: "dhaka",
    },
    hasBike: false,
  };
  const employeeWithoutCity: Emplyee = {
    name: "Jane Doe",
  };

  const res: string = getEmployeeCity(employeeWithoutCity);
  const res2: string = getEmployeeCity(employee);
  console.log(res2);
}
