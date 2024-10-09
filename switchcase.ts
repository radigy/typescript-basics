let day: string = "Saturday"

let dayOfWeek: string;

let myday: string = "naveen";

switch (myday.toLowerCase()) {
    case "sunday":
        console.log("its sunday");
        break;
    case "monday":
        console.log("its monday");
       break;
    case "tuesday":
        console.log("its tuesday");
        break;
    case "wednesday":
        console.log("its wednesday");
        break;
    
    default:
        console.log("wrong day");
        break;
}

// enums

enum Browser2 {
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge",
    Chrome = "chrome"
}

let browserName2: string = Browser2.Firefox

switch (browserName2) {
    case Browser2.Firefox:
        console.log("launch firefox");
        break;
    case Browser2.Chrome:
        console.log("launch chrome");
        break;
    default:
        console.log("wrong browser info");
        break;
    }