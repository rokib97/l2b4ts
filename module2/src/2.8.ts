{
  // async ts
  //   basic promise
  type Something = { something: string };
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("Something wrong....");
      }
    });
  };

  //   calling create promise
  const getData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
  };

  getData();

  //   get data from server
  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  const getTodo = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data: Promise<Todo> = await res.json();
    return data;
  };

  const result = getTodo();

  const getTodo2 = async <T>(): Promise<T> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data: T = await res.json();
    return data;
  };

  const result2 = getTodo2<Todo>();
}
