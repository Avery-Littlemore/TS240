// Write a TypeScript function that accepts a parameter of type string | undefined. The function should use short-circuiting to:

// Log "Input is defined and not empty" if the input is a non-empty string.
// Do nothing if the input is either undefined or an empty string ("").

function savvyShortcut(input: string | undefined): void {
  input && input !== '' && console.log("Input is defined and not empty");
}