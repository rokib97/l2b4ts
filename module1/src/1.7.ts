{
  // spread operator | rest operator
  const bros1: string[] = ["a", "b", "c"];
  const bros2: string[] = ["c", "d", "e"];
  bros1.push(...bros2);

  const level1: {
    html: string;
    css: string;
    js: string;
  } = {
    html: "Noor ",
    css: "jihad",
    js: "rokib",
  };
  const level2: {
    react: string;
    next: string;
    typeScript: string;
  } = {
    react: "Mir ",
    next: "tonmoy",
    typeScript: "Mezbah",
  };

  const mentorList = {
    ...level1,
    ...level2,
  };

  //   rest
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hello ${friend}`));
  };

  greetFriends("Abul", "Babul", "Kabul");
}
