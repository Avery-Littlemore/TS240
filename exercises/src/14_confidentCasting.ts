// Create a variable randomValue that is of type any. Perform a type assertion to treat it as a string,
// and then call the .toUpperCase() method on it.

// Expected output:
// HELLO WORLD

let randomValue: any = 9;

let uppercaseRandomValue = (randomValue as string).toUpperCase();

console.log(uppercaseRandomValue);
