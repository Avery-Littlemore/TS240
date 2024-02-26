// Try to create a utility function called safeGet that allows us to access the elements in any array safely. 
// safeGet should take two arguments: an array and the index of an element in the array. If the index is within the 
// bounds of the array, return the element at that index, otherwise, return undefined.

function safeGet<T>(arr: T[], index: number) {
  if (index >= 0 && index < arr.length) {
    return arr[index];
  }
  return undefined;
}

const names: string[] = ["John", "Jane"];
const nameAtIndex = safeGet(names, 2); // Should return undefined

const numbers: number[] = [1, 2, 3];
const number = safeGet(numbers, 1); // Should return 2