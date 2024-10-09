// tuple: fixed size
// tuple vs array
// array: dynamic: runtime more values can be added 

let person: [string, number] = ["Naveen", 100] 
let user: [string, number, boolean] = ["Naveen", 100, true] 

console.log(person[0])
console.log(person[1])

let data: [string, number][] = [["Naveen", 100], ["Ravi", 200]]
console.log(data[0][0]);

let customer: [string, number] = ["Naveen", 100]
customer.push("Ravi", 200)
console.log(customer);