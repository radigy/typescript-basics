function throwError(mesg: string): never {
    throw new Error(mesg)
}

//throwError("some Error")

function displayMesg(): never {
    while(true) {
        console.log("welcome to taj hotel");
    }
}

displayMesg()