function functionName<T>(value: T): T[] {
  console.log(value, typeof value);
  return [value];
}

const res = functionName<number>(123);
const res1 = functionName<string>("123");
const res2 = functionName<boolean>(true);

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

mergeObjects({ a: 1 }, { b: 2 });

type MysteryBox<T, U> = {
  value: T;
  year?: U;
};

type User2 = {
  skills: {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    experience: string;
  }[];
  address: {
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
};

const numberBox: MysteryBox<number, number> = { value: 10, year: 1996 };
const stringBox: MysteryBox<string, string> = { value: "string", year: "1996" };

const userBox: MysteryBox<User2 | null, number> = { value: null };

if (userBox.value) {
  console.log(userBox.value.address.city);
}

type ApiRes<T> = {
  data: T;
  status: number;
  message: string;
};

type UserOne = {
  id: number;
  title: string;
};

type CommentOne = {
  name: string;
  email: string;
  body: string;
  id: number;
};

async function fetchData<T>(url: string): Promise<ApiRes<T | null>> {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return {
      data: data,
      status: res.status,
      message: res.statusText,
    };
  } catch (error) {
    return {
      data: null,
      status: 500,
      message: "Error fetching data",
    };
  }
}

async function main() {
  const post = await fetchData<UserOne>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  console.log(post.data?.title);
  const comment = await fetchData<CommentOne>(
    "https://jsonplaceholder.typicode.com/comments/1"
  );
  console.log(comment.data?.email);
}
main();
