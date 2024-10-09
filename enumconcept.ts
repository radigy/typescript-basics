// Enum: Enumeration: data types: hold the set of constants
// numeric
// string
// heterogenous

// numeric
enum Browser {
    Firefox,
    Safari,
    Edge = getVersion('chrome')*5,
    Chrome=getVersion('chrome')
}

function getVersion(browserName: string): number {
    if(browserName === "chrome") {
        return 115;
    }
    return -1
}

console.log(Browser.Chrome);
console.log(Browser.Edge);

// String Enum: 

enum environment{
    DEV = "dev",
    QA = "qa",
    STAGE = "stage", 
    PROD = "prod"
}

console.log(environment.DEV)
console.log(environment['STAGE']);

// heterogenous enum:
enum Status{
    ACTIVE = 'active',
    DEACTIVE = 1,
    PENDING
}

console.log(Status.ACTIVE);
console.log(Status.DEACTIVE);
console.log(Status.PENDING);