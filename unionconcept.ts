let userId: (string | number);
userId = 10001
userId = "naveenautomation";

function getUserInformation(customerID: (string | number)) {
    if(typeof(customerID) === 'number') {
        return 9001+"_naveen"
    }
    else if(typeof(customerID) === 'string') {
        return "_naveen"
    }
}

console.log(getUserInformation(900))
console.log(getUserInformation("automation"))