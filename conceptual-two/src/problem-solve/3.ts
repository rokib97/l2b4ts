// Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

{
  function filterEvenNumbers(nums: number[]): number[] {
    return nums.filter((item) => item % 2 == 0);
  }
}
