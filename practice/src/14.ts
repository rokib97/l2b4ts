{
  /**
     * Task 14: Asynchronous TypeScript and Type Aliases
    Objective: Simulate an asynchronous operation with TypeScript.

    Instructions:

    Write an asynchronous function that:
    Simulates fetching user data (containing name and age).
    Returns the data after a short delay.
     */

  type UserData = {
    name: string;
    age: number;
  };
  const fetchUserData = (): Promise<UserData> => {
    return new Promise<UserData>((resolve, reject) => {
      setTimeout(() => {
        const userData: UserData = { name: "rokib", age: 26 };
        if (userData) {
          resolve(userData);
        } else {
          reject("something is wrong....");
        }
      }, 1000);
    });
  };

  type CustomError = {
    message: string;
  };
  const getUserData = async (): Promise<UserData | undefined> => {
    try {
      const user: UserData = await fetchUserData();
      return user;
    } catch (error) {
      console.log((error as CustomError).message);
    }
  };

  getUserData();
}
