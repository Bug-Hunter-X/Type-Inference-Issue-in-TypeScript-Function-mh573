function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

// Uncommon error: Type inference issue
function operate(op: (a:number, b:number) => number, a: number, b: number): number {
  return op(a,b);
}

//this won't work because operate is expecting a function that return number
let result3 = operate(add, 5, "3");