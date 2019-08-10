console.log("hello world");
// const url = new URL("...");
var lucky = 100; // implicit declaration
var oneHundred = lucky; // explicitly 
var font;
var person = {
    firstName: "Paul",
    lastName: "Miller"
};
var person2 = {
    firstName: "Allen",
    lastName: "Roberts"
};
// variables followed by their types && the return type at the end ":string"
function pow(x, y) {
    return Math.pow(x, y).toString();
}
;
// this function returns nothing, set return type to void
function logMe(message) {
    console.log(message);
}
;
// strongly typed array 
var arr = [];
var tuple = [];
tuple.push("string");
