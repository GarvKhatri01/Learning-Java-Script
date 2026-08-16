const name ="garv"
const RepoCount = 10

console.log(name + RepoCount + "Value"); // To Concatenate ..Not recommended


//String Interpolation ->Recommended

console.log(`Hello My name is ${name} My repo count is ${RepoCount}`);

const game = new String('gta ViceCity')  //Object 

console.log(game[0]);


console.log(game.__proto__);

console.log(game.length);

console.log(game.toUpperCase());  //Return a function ..no change will be there in original
console.log(game.charAt(2));  //character at index 2

console.log(game.indexOf('t')); //gives index of character

const newgame = game.substring(0,5)  // start,end(excluded)

console.log(newgame);

const anotherString = game.slice(0,6)
console.log(anotherString);

const newString = "   Hitesh Sahil    "

console.log(newString);
console.log(newString.trim());

const url = "https//garv//hello%20khatri"

console.log(url.replace('%20','-'));  //Returns a function
console.log(url); //no change in original
console.log(url.includes('garv'));
console.log(url.includes('kaju'));

const currString = new String('garv-sahil-ankur-clive') 

//Split of string 

console.log(currString.split('-'));


