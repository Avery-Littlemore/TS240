function concatenateStrings(a: string, b: string): string {
  return a + b;
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

const result = concatenateStrings("Hello", "World");
const numericResult = addNumbers(1, 2);

console.log(result); // "HelloWorld"
console.log(numericResult); // 3