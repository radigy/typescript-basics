// arrow function : => or arrow or lambda function
// anonymus function: without name 
var java = function () {
    console.log("hello java");
};
var python = function () { return console.log("python"); };
java();
python();
var addMe = function (a, b) {
    console.log(a + b);
};
addMe(3, 5);
var sumMe = function (a, b) { return a + b; };
console.log(sumMe(12, 12));
var Person = /** @class */ (function () {
    function Person(firstName, age) {
        var _this = this;
        this.display = function () { return console.log(_this.firstName + " " + _this.age); };
        this.firstName = firstName,
            this.age = age;
    }
    return Person;
}());
var p = new Person("tom", 12);
p.display();
