var flag = true;
if (flag) {
    console.log("pass");
}
else {
    console.log("fail");
}
var x = 12, y = 20;
if (x > y) {
    console.log("x is grater than y");
}
else {
    console.log("y ia greater than x");
}
// < > <= >= === !=
// if-else if:
var a = 600;
var b = 500;
var c = 300;
if (a > b && a > c) { //false && false
    console.log("a is greatest");
}
else if (b > c) { //false
    console.log("b is greatest");
}
else {
    console.log("c is the greatest");
}
// ternary operator:
var i = 100;
var j = 200;
i > j ? console.log("i is greater than j") : console.log("j is greater than i");
var browser = "edge";
(browser === 'chrome') ? console.log("launch chrome") : (browser === "firefox") ? console.log("launch firefox") : console.log("please pass the right browser");
