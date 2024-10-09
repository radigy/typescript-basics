//optional params
function getInformation(firstName: string, age?: number): string {
    return firstName + " " + age
}

console.log(getInformation("Tom"))

//default params:
function setDetails(name: string, mesg: string = "welcome") {
    return mesg + " " + name
} 

console.log(setDetails('naveen'))
console.log(setDetails('naveen',  "hello"))
console.log(setDetails('naveen', undefined))