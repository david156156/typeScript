let myName: string = "Margol";
let myAge: number = 84;
let isStudent: boolean = true;
console.log(myName, myAge, isStudent);

let num1: number = 21,
  num2: number = 31;
console.log(num1 + num2);

// union type
let price: number | string = 59;
price = "59";

// new type
type booleanOrNumber = boolean | number;
let flag: booleanOrNumber = true;
flag = 100;

// super type
let data: any = 10;
data = "lala";
data = false;
flag = data;

let data2: unknown = 18;
data2 = "cl";
// flag = data2; // error

// casting
let data3: unknown = "123";
console.log((data3 as string).length);

let data4: number | string = "telaviv";
console.log((data4 as string).includes("a"));

// array
let numbers: number[] = [1, 2, 3, 4];
let numbers2: Array<number> = [10, 20, 30];
let numbers3: Array<Number> = [100, 200, 300];

let names: string[] = ["avi", "margol"];
let names2: Array<string> = ["avi", "margol"];
let names3: Array<String> = ["avi", "margol"];

// numbers.push("12") // error

// function
function showMessage(message: string): void {
  console.log(message);
}

function multiple(x: number): number {
  return x * 2;
}

console.log(multiple(5));

let multiple2: Function = (x: number = 8): number => x * 2;
console.log(multiple2(4));
console.log(multiple2());

type getNumberReturnNumber = (value: number) => number;
let multiple3: getNumberReturnNumber = (y: number): number => y ** y;

console.log(multiple3(2));
