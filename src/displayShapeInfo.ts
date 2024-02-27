function displayShapeInfo(shape: Shape): string {
  return shape.color;
}

interface Shape {
  color: string;
}

interface Rectangle extends Shape {
  length: number;
  width: number;
  // color: string;
}

interface Circle extends Shape {
  radius: number;
  // color: string;
}

const circle: Circle = {
  radius: 10,
  color: 'blue',
}

displayShapeInfo(circle);


interface Person {
  name: string;
  age: number;
}