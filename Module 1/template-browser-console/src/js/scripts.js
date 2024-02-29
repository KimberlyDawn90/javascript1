// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  
  //collecting first and last names of user, reassigning to variable fullName
  let firstName = await input("What is your first name? ");
  let lastName = await input("What is your last name? ");
  let fullName = firstName + " " + lastName; 
  output("Your full name is " + fullName);

  //changing all lowercase o's to a's, outputting to test reassigned variable
  let replacedName = fullName.replace(/o/g, "a");
  output("But I will call you " + replacedName); 
  
  //collecting variable data as string type
  let firstNum = await input ("Please enter a whole number larger than 10. ");
  let secondNum = await input ("Please enter a whole number smaller than 10. ");
  
  //parsing strings to integers so modulus operator can work properly
  output(parseInt(firstNum) % parseInt(secondNum) + " is the remainder of your larger number divided by your smaller number.");
}