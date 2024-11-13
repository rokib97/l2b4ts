{
  // array with generic
  type DynamicArray<T> = Array<T>;
  //   type DynamicArray<T> = T[];
  const numArray: DynamicArray<number> = [1, 2, 3, 4];
  const stringArr: DynamicArray<string> = ["rokib", "raz", "sk", "Mir"];
  const boolArr: DynamicArray<boolean> = [true, false, true, true];

  //   interface with generic
  interface IPerson<K, T, U> {
    name: string;
    age: U;
    isActive: K;
    id: T;
  }
  const person: IPerson<boolean, number | string, number> = {
    name: "rokib",
    age: 35,
    isActive: true,
    id: "abc123",
  };

  const showMsg = <msgType, msgType2, T = null>(
    message1: msgType,
    message2: msgType2,
    message3: T
  ) => {
    return { message1, message2, message3 };
  };

  const res1 = showMsg<
    boolean,
    string,
    IPerson<boolean, number | string, number>
  >(true, "Hello", {
    name: "rokib",
    age: 35,
    isActive: true,
    id: "abc123",
  });
  const res2 = showMsg<string, string, null>("World", "Hello", null);
}
