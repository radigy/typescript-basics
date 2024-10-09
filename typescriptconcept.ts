// typescript is a statically typed language
// type inference
// type annotations -> num: number  ... name:string

let fName: string;
fName = "Naveen";

let num: number;
num = 50;

let n: number = 50;
let lName: string = "Peter"

let test = "typescript";

let isActive: boolean = true;

// null and undefined
let city: null = null;
let country: undefined = undefined;

// any
let value: any = 80;
value = "dev"
value = true;

// void (function does not return any value)
function printHello(): void{ //return type: void -- Compile time
    console.log("hello");
}

function getNumber(): number { // return--> Compile time
    return 123
}

function getAnyValue():any { // return type = any --> compile type
    return 
}

function addition (a,b): string {
    return a+b
}

console.log(addition(10,20))
console.log(addition("abc", "zxc"))




