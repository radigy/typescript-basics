let names: string[] = ["tom", "peter", "peter", "ravi"]
console.log(names[0])

// using generics
let empNames: Array<string> = ["tom", "peter", "peter", "ravi"];
let empIds: Array<number> = [1,2,3,4];
let empInfo: Array<any> = [1, "naveen", null];

// multi type array:
let values: (string | number)[] = ["Tom", 100, "Naveen", 200];
let val: Array<string | boolean> = ["tom", true]

// first array declaration and init:
let users: Array<string>
users = ["Peter", "Navenn"]

let employees: Array<string> = ["tom", "peter", "naveen", "ravi"]

// iterate 

for(let i=0; i<employees.length; i++) {
    console.log(employees[i])
}

// for
for (let e in employees) {
    console.log(e);
}
