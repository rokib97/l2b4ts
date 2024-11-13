{
  function getLength<T extends { length: number }>(str: T) {
    return str.length;
  }
  console.log(getLength<string>("1234"));
}
