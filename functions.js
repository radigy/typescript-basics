// functions in TS
// void 
// return
// take parameters
// named function with 0 params
function getInfo() {
    console.log("0 parameter function");
}
getInfo();
// named function with params
function add(a, b) {
    console.log(a + b);
}
// named function with return
function calNumbers(a, b, c) {
    var total = a + b + c;
    return total;
}
console.log(calNumbers(10, 20, 30));
// fundtion return boolean
function isUserActive(userType) {
    if (userType === 'naveen') {
        return true;
    }
    if (userType === 'tom') {
        return false;
    }
    else {
        console.log('user name is not found');
        return false;
    }
}
if (isUserActive('peter')) {
    console.log('login with naveen');
}
// anonymus function: without name -- store in a variable
// call it using variable name
var info = function () {
    console.log("hello ts");
};
info();
// anonymus function with parameter
var sum = function (x, y) {
    return x + y;
};
var res = sum(33, 33);
console.log(res);
