console.log("hello world")
const url = new URL("...");

const lucky = 100; // implicit declaration
const oneHundred: number = lucky;  // explicitly 

// create a custom type
type Style = 'bold' | 'italic';

let font: Style;

// create custom template to strongly type an object
interface Person {
    firstName: string;
    lastName: string;
    [key: string]: any; // allows for any additional property to be added to this object 
}                       // while the first two are still required 

const person: Person = {
    firstName: "Paul",
    lastName: "Miller",
}

const person2: Person = {
    firstName: "Allen",
    lastName: "Roberts",
}

// variables followed by their types && the return type at the end ":string"
function pow(x: number, y: number): string {
    return Math.pow(x, y).toString();
};

// this function returns nothing, set return type to void
function logMe(message: string): void {
    console.log(message);
};

// strongly typed array 
const arr: number[] = [];
// type followed by []

// can accept the types declared in array, the question mark denotes optional 
type myTuple = [number?, string?, boolean?];

const tuple: myTuple = [];

tuple.push("string");

console.log(tuple)
