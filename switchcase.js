var day = "Saturday";
var dayOfWeek;
var myday = "naveen";
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
var Browser2;
(function (Browser2) {
    Browser2["Firefox"] = "firefox";
    Browser2["Safari"] = "safari";
    Browser2["Edge"] = "edge";
    Browser2["Chrome"] = "chrome";
})(Browser2 || (Browser2 = {}));
var browserName2 = Browser2.Firefox;
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
