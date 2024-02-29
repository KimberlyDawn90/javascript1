  //Data Types: is the type of data that can be inputted, stored, used, outputted, or handled by a program
  //Primitives: Undefined(no value yet, placeholder), boolean, number, string, BigInt, Symbol (single piece of data)(cell)
  //Structural: objects, functions (collection of data)(organ - collection of cells)
  //Structural root primitive: null (no value, there will be no value)

  //Variable_name = variable_value
  var myName = "Kim";
  //Is global scoped - accessed by any part of code - considered bad practice (don't use)
  let myName1 = "Kim";
  //Is block-scoped - you use it when you need a value that can be redefined (can be reassigned)
  const myName2 = "Kim";
  // when you declare a variable with const, the value of the variable CANNOT change (cannot be reassigned) 

  //example of let vs. const 

  myName1 = "Kimberly"; //will change variable value
  myName2 = "Kimberly"; //will throw an error because it is constant

//common data types
// string: is a collection of 0 or more characters, and is often wrapped in single or double quotes (they do the same thing, be consistent)
//numbers: a number, for doing mathematical operations on

myNumber = "1"; // is a string because its in quotes, even though 1 is a number, its considered a character
myNumber = 1; //this is a number because it has NO QUOTES
let myDecimal = 3.14; // is a number (a float)

//booleans: value is either true or false, must be lowercase 
myNumber = true;

output(myNumber);

//concatenation
output("1"+"1"); //is 11
output("1"+1); //is 11
output("1"+2+3); //is 123
output(1+2+"3"); //is 33 (javascript reads left to right, depends on what type is first (on left))

//changes to strings
output(myName.toUpperCase()); //changes variable string to all uppercase
output(myName.toLowerCase()); //changes variable string to all lowercase
output(myName.includes("o")); //checks if the string contains an "o" - will result in true or false 
output(myName.slice(1,3)); //strings start a 0, so the first letter is 0, ie this would print = "im" not "Kim"
output(myName1.replace("o", "a")); //will replace the first o with an a in the string (only works on first letter not multiple)
output(myName1.replace(/o/g, "a")); //will replace all o's with a's - the forward slashes indicate "regular expression", the g is "global" - everytime it see's an o replace it with an a

//research regular expressions in own time

//numbers
output(1+1); //addition
output(1-1); //subtraction
output(1*1); //multiplication
output(1/1); //division
output(5%4); //modulus (calculates the remainder, only outputs the remainder)(can determine if number is odd or even)

let myNumber = "3.99";
output(typeof(myNumber)); //will output "string" as variable is in quotations and considered a string
output(typeof(parseInt(myNumber))); //takes a string, tries to convert into an integer - will output 3 
output(parseFloat(myNumber)); //will not create a decimal as whole number, if myNumber = 3.99 will output 3.99

//advanced operations
output(Math.floor(myNumber)); //will output 3, take it to the whole number at base - rounds down
output(Math.floor(myNumber)); //will output 4, take it to the next whole number - rounds up
output(Math.round(myNumber)); //will round number up or down depending if .4 or below, and .5 or higher

//increment and decrement
let myNum = 1;
myNum++; //number increases by 1
myNum--; //number decreases by 1

//for input
const prompt = "What is your name?"

let favouriteColour = await input("What is your favourite colour?");
output("Your favourite colour is: " + favouriteColour);