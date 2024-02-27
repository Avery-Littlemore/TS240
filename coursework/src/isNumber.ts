function isNumber(value: any): value is number {
  return (typeof value === 'number');
}

// example 1
let x: any = "Launch School";
if (isNumber(x)) {
  const y = x;
  console.log(y);
} else {
  console.log('x is not a number')
}


// example 2
if (isNumber(x)) {
  let a: any = "Launch School";
  const b: number = x as number;
}