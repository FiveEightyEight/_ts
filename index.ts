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
}

const person: Person = {
    firstName: "Paul",
    lastName: "Miller",
}

const person2: Person = {
    firstName: "Allen",
    lastName: "Roberts",
}