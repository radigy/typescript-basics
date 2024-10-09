// for loop:
for(let i=1; i<=10; i++) {
    console.log(i);
}

console.log("----------");

for(let j=0; j<= 10; j=j+2) {
    console.log(j);
}

console.log("----------");
//for of loop

let numbers = [10,200,3000,40000]

for (let n of numbers) {
    console.log(n);
    if (n===200) {
        console.log("hi");
        break;
    }
}

console.log("----------");

//for in loop

for (let i in numbers) {
    console.log(i + "." + numbers[i])
}

console.log("----------");

let info = "Hello World";

for(let c of info) {
    console.log(c);
}

//while 1 to 10

let p = 1

while (p <=10) {
    console.log(p);
    p++
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

let d = 1;

do {
    console.log(d);
    d++
} 
while (d>=10);