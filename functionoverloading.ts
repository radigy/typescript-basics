// typescript provides the concept of funtion overloading
// you can have multiple funcions
// 1. with the same name
// 2. but different parameter types and return types
// 3. however, the number of parameters should be the same

function add (a:string, b:string): string;
function add (a:number, b:number): number;
function add (a:boolean, b:boolean): boolean;

// need to implement this only once
function add (a: any, b: any):any {
    return a+b
}

let s1 = add('hello', 'world')
let s2 = add(1,2)
let s3 = add(true, false)

console.log(s1)
console.log(s2)
console.log(s3)