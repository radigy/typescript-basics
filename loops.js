// for loop:
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("----------");
for (var j = 0; j <= 10; j = j + 2) {
    console.log(j);
}
console.log("----------");
//for of loop
var numbers = [10, 200, 3000, 40000];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var n = numbers_1[_i];
    console.log(n);
    if (n === 200) {
        console.log("hi");
        break;
    }
}
console.log("----------");
//for in loop
for (var i in numbers) {
    console.log(i + "." + numbers[i]);
}
console.log("----------");
var info = "Hello World";
for (var _a = 0, info_1 = info; _a < info_1.length; _a++) {
    var c = info_1[_a];
    console.log(c);
}
//while 1 to 10
var p = 1;
while (p <= 10) {
    console.log(p);
    p++;
}
// use cases for while: when number of iterations are not fixed
// 1. infinite scrolling: zomato, swiggy, linkedin page
// 2. wait for page loading 2, 5, 10, 15 
// 3. wait for element on the page: 2, 3, 5, 10
// calendar handling: 
// webtable pagination: prev .. 1, 2, 3, 4 .. next  
// use cases for for loop
// 1. when number of iterations are fixed:
// 2. drop down: month: Jan to dec 1 to 12 
// do while
console.log("----------");
var d = 1;
do {
    console.log(d);
    d++;
} while (d >= 10);
