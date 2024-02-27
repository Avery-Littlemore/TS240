// Convert the getData function to TypeScript by adding proper types. Additionally, rewrite the function using the async/await syntax.
// function getData(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// async function getData(url: string): Promise<void> {
//   const response = await fetch(url)
//   const data = response.json();
//   console.log(data);
// }

// This time, try to extend it by adding some try-catch logic to make our function more robust. 
// Use the unknown type for the error we catch. Since the error is of type unknown, do some simple
// type guarding to narrow down the type of error and handle them accordingly. If it's an error object,
// log out the error message, otherwise, log out "An unknown error occurred".


async function getData(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error message: ${error.message}`);
    } else {
      console.error('An unknown error occurred');
    }
  }
  
}