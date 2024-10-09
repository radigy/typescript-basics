var userId;
userId = 10001;
userId = "naveenautomation";
function getUserInformation(customerID) {
    if (typeof (customerID) === 'number') {
        return 9001 + "_naveen";
    }
    else if (typeof (customerID) === 'string') {
        return "_naveen";
    }
}
console.log(getUserInformation(900));
console.log(getUserInformation("automation"));
