// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  
    //define username & password
  const userName = "admin";
  const passWord = "adminpwd";
  
  //get username input
  let enteredName = await input ("Please enter your username:");

   
  //NOTE: I had trouble with my next block appearing even when the user name was wrong, so I looked it up and found out about "return;"
  //NOTE: I had trouble with the empty string so I looked up the "length" property to check if string was empty 
  //https://stackoverflow.com/questions/3536055/stopping-a-javascript-function-when-a-certain-condition-is-met
  //https://www.freecodecamp.org/news/check-if-string-is-empty-or-null-javascript/

  //determine if input is accurate
  if (enteredName == userName){
    output ("Welcome back user: admin");
    } else if (enteredName.length == 0){
        alert ("You did not enter any input, please reload and try again.")
        return;
    } else if (enteredName != userName){
        output ("That user name does not exist, please register.")
        return;
    } 
  
   //get user password 
   let enteredPass = await input ("Please enter your password:");

   //determine if input is accurate
   if (enteredPass == passWord){
        output ("Password correct, logging you in now!");
    } else if (enteredPass.length < 8){ 
        output ("Password entered is not long enough! Reload and try again! Loser!")
        return;
    } else {
        output ("That password is incorrect.")
        return;
    }

}