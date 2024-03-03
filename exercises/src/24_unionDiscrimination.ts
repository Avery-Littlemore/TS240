// Define a discriminated union Shape that can be either a Circle with kind: "circle" and radius properties, or a Square with 
// kind: "square" and sideLength properties. Then write a function getArea that calculates the area of the given shape.

// Expected output for getArea({ kind: "circle", radius: 10 }):
// 314.1592653589793

// Expected output for getArea({ kind: "square", sideLength: 10 }):
// 100

type Circle = {
  kind: 'circle',
  radius: number,
}

type Square = {
  kind: 'square',
  sideLength: number,
}

type Shape = Circle | Square;

function getArea(shape: Shape): void {
  if (shape.kind === 'circle') {
    console.log(Math.PI * shape.radius ** 2);
  } else {
    console.log(shape.sideLength ** 2);
  }
}

getArea({ kind: "circle", radius: 10 });
getArea({ kind: "square", sideLength: 10 });