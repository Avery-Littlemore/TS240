// Implement a function assertNever that takes a value of type never and throws an error. 
// Refactor the solution we had in the last exercise to add exhaustiveness checking to the 
// getArea function above to ensure all cases are handled.

type Circle2 = {
  kind: "circle";
  radius: number;
};

type Square2 = {
  kind: "square";
  sideLength: number;
};

type Shape2 = Circle2 | Square2;

function getArea2(shape: Shape2): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === 'square') {
    return shape.sideLength ** 2;
  } else {
    return assertNever(shape);
  }
}

function assertNever(value: never): never {
  throw new Error(`Unhandled value: ${value}`);
}