function first<T>(arr: T[]): T {
  return arr[0];
}

let numArray = [1, 2, 3, 4, 5];
let strArray = ["a", "b", "c", "d", "e"];

let firstNum = first(numArray); // TypeScript infers T to be number
let firstStr = first(strArray); // TypeScript infers T to be string