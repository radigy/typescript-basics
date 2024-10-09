var names = ["tom", "peter", "peter", "ravi"];
console.log(names[0]);
// using generics
var empNames = ["tom", "peter", "peter", "ravi"];
var empIds = [1, 2, 3, 4];
var empInfo = [1, "naveen", null];
// multi type array:
var values = ["Tom", 100, "Naveen", 200];
var val = ["tom", true];
// first array declaration and init:
var users;
users = ["Peter", "Navenn"];
var employees = ["tom", "peter", "naveen", "ravi"];
// iterate 
for (var i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}

console.log("--")
// for
for (var e in employees) {
    console.log(employees[e]);
}
