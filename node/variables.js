// there are 3 basic ways to declare variables in js

// Var, but don't use this one anymore
var test =  3;//can be declear as many times 

// let, is like var, but block scoped, and not allowed to re-declare
let hello = 'world'; // Notice strings use single quotes
hello = 5; // changing the type of variable is okay, in this case string to number.

// const is a constant
const iAmAConstant = 9;

// objects
// variables can also be objects
const obj = {};

// objects can dynamically add and remove properties
obj.a = 9;

// For Practice

// declare an object with an object as a property
// const object cannot be reassinged
const myObj = {
    obj: {
    }
};

// myObject = {}; //not allowes
// myObject.a = 3; // allowed
// myObject.a.b = 4; // allowed


// delete a property
myObject.a = null; // null is an object 
myObject.a = undefine; // undefine mean it doesn't exist
delete myObject.a;

// // change a property

// variable named veriable
const variableName = 'a';
myObject.a = 8;
console.log(myObject[variableName]);

//anything that is null or undefine will be evaluated as false
if(myObject[variableName]) {
    console.log(myObject[variableName]);
}