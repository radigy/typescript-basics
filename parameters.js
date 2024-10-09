//optional params
function getInformation(firstName, age) {
    return firstName + " " + age;
}
console.log(getInformation("Tom"));
//default params:
function setDetails(name, mesg) {
    if (mesg === void 0) { mesg = "welcome"; }
    return mesg + " " + name;
}
console.log(setDetails('naveen'));
console.log(setDetails('naveen', "hello"));
console.log(setDetails('naveen', undefined));
