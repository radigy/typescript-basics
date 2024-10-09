// functions in TS
// void 
// return
// take parameters

// named function with 0 params
function getInfo() {
    console.log("0 parameter function");
}

getInfo()


// named function with params
function add(a:number, b:number) {
    console.log(a+b);
}

// named function with return

function calNumbers(a:number, b:number, c:number): number {
    let total:number = a+b+c
    return total
}

console.log(calNumbers(10,20,30))

// fundtion return boolean

function isUserActive(userType): boolean {
    if (userType === 'naveen') {
        return true;
    } if (userType === 'tom') {
        return false;
    } else {
        console.log('user name is not found');
        return false;
    }
}
 
if (isUserActive('peter')) {
    console.log('login with naveen');
}

// anonymus function: without name -- store in a variable
// call it using variable name

let info = function() {
    console.log("hello ts");
}

info()

// anonymus function with parameter
let sum = function(x: number, y: number):number {
    return x+y
} 

let res: number = sum(33,33)
console.log(res);