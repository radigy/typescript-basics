// arrow function : => or arrow or lambda function
// anonymus function: without name 

let java = () => {
    console.log("hello java");
}

let python = () => console.log("python");

java()
python()

let addMe = (a:number, b:number) => {
    console.log(a+b);
}

addMe(3,5)

let sumMe = (a:number, b:number) => a+b

console.log(sumMe(12,12));

class Person {
    firstName: string;
    age: number;

    constructor(firstName: string, age: number) {
        this.firstName = firstName,
        this.age = age
    }

    display = () => console.log(this.firstName + " " + this.age);
}

let p = new Person("tom", 12)
p.display()