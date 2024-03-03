// Create a generic function filterByType that filters an array based on the type provided. Use generics to return an array 
// containing only elements of the given type.

// Expected output for filterByType<string>(["hello", "world", 42, true], "string"):
// ["hello", "world"]

function filterByType<T>(input: any[], type: T): T[] {
  return input.filter(element => typeof element === type);
}

console.log(filterByType<string>(["hello", "world", 42, true], "string"));
