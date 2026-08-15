//primitive

// 7  types : string , Number ,Boolean ,null,undefined,Symbol
//Bigint

//dymanically typed
//Null is an object 
// Symbol declare

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

//for bigint 

const bignum = 2222222222345567n


//Refrence type(Non Primitive)

//Array , Objects ,Functions

const heros = ["shaktiman","ironman","superman"];

let myObj = {
    name :"shraddha",
    age :19
}

const myfunction = function(){
    console.log("Hello");
    
}

console.log(typeof(bignum))

