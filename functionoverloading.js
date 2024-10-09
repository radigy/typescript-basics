// typescript provides the concept of funtion overloading
// you can have multiple funcions
// 1. with the same name
// 2. but different parameter types and return types
// 3. however, the number of parameters should be the same
// need to implement this only once
function add(a, b) {
    return a + b;
}
var s1 = add('hello', 'world');
var s2 = add(1, 2);
var s3 = add(true, false);
console.log(s1);
console.log(s2);
console.log(s3);
