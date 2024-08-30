var myName = "Margol";
var myAge = 84;
var isStudent = true;
console.log(myName, myAge, isStudent);
var num1 = 21, num2 = 31;
console.log(num1 + num2);
// union type
var price = 59;
price = "59";
var flag = true;
flag = 100;
// super type
var data = 10;
data = "lala";
data = false;
flag = data;
var data2 = 18;
data2 = "cl";
// flag = data2; // error
// casting
var data3 = "123";
console.log(data3.length);
var data4 = "telaviv";
console.log(data4.includes("a"));
// array
var numbers = [1, 2, 3, 4];
var numbers2 = [10, 20, 30];
var numbers3 = [100, 200, 300];
var names = ["avi", "margol"];
var names2 = ["avi", "margol"];
var names3 = ["avi", "margol"];
// numbers.push("12") // error
// function
function showMessage(message) {
    console.log(message);
}
function multiple(x) {
    return x * 2;
}
console.log(multiple(5));
var multiple2 = function (x) {
    if (x === void 0) { x = 8; }
    return x * 2;
};
console.log(multiple2(4));
console.log(multiple2());
var multiple3 = function (y) { return Math.pow(y, y); };
console.log(multiple3(2));
