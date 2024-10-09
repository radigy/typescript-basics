// typescript is a statically typed language
// type inference
// type annotations -> num: number  ... name:string
var fName;
fName = "Naveen";
var num;
num = 50;
var n = 50;
var lName = "Peter";
var test = "typescript";
var isActive = true;
// null and undefined
var city = null;
var country = undefined;
// any
var value = 80;
value = "dev";
value = true;
// void (function does not return any value)
function printHello() {
    console.log("hello");
}
function getNumber() {
    return 123;
}
function getAnyValue() {
    return;
}
function addition(a, b) {
    return a + b;
}
console.log(addition(10, 20));
console.log(addition("abc", "zxc"));
