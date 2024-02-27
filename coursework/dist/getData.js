"use strict";
// Convert the getData function to TypeScript by adding proper types. Additionally, rewrite the function using the async/await syntax.
// function getData(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// async function getData(url: string): Promise<void> {
//   const response = await fetch(url)
//   const data = response.json();
//   console.log(data);
// }
// This time, try to extend it by adding some try-catch logic to make our function more robust. 
// Use the unknown type for the error we catch. Since the error is of type unknown, do some simple
// type guarding to narrow down the type of error and handle them accordingly. If it's an error object,
// log out the error message, otherwise, log out "An unknown error occurred".
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            const data = yield response.json();
            console.log(data);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(`Error message: ${error.message}`);
            }
            else {
                console.error('An unknown error occurred');
            }
        }
    });
}
