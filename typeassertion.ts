//TSC

//1. suing <>
//2. using as keyword

let totalBill: any = 123;
let finalBill = <number>totalBill + 200;
console.log(finalBill);

let someValue: any = "Hello TypeScript with Naveen Automation";

let len = (someValue as string).length;
console.log(len);

let flag: any = true;
if (flag as boolean) {
    console.log("hello TS");
}