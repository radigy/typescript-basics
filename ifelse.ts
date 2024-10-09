let flag: boolean = true

if(flag){ 
    console.log("pass");
}
else {
    console.log("fail");
}

let x: number = 12, y:number = 20;

if(x>y) {
    console.log("x is grater than y");
} else {
    console.log("y ia greater than x");
}

// < > <= >= === !=

// if-else if:
let a: number = 600
let b: number = 500
let c: number = 300

if(a>b && a>c) { //false && false
    console.log("a is greatest");
} 
else if (b>c) { //false
    console.log("b is greatest");
}
else { 
    console.log("c is the greatest");
}

// ternary operator:
let i: number = 100;
let j: number = 200;

i>j ? console.log("i is greater than j") : console.log("j is greater than i");

let browser: string = "edge";

(browser === 'chrome') ? console.log("launch chrome") : (browser === "firefox") ? console.log("launch firefox") : console.log("please pass the right browser");