/*
  const prompt = "Please enter your name, or 'Exit' to quit: ";
  let name = await input(prompt);

  while (name !== "Exit") {
    output("Hello, " + name + "!");
    name = await input(prompt);
  }
  */

  //Relational Operators:
  // < = "less than"
  // > = "greater than"
  // <= = "less than or equal to"
  // >= = "greater than or equal to"
  // example: output( 2 > 3);
  // example: output( 6 >= 4);

  /*
  output(5 > 4);
  output(3 < 2);
  output(5 <= 3);
  output(2 >= 2);
  output(3 = 4); //assignment - throws error - assignment is used to assign a value to a variable, there is no variable, so it doesnt work 
  output(3 == "3"); //true - will convert values to common type then checks if they are the same 
  output(3 === "3"); //identity checks if both values and types are the same
  */
  
  //Order of Operations:
  // PEMDAS = Parenthesis, exponents, multiplication, division, addition, subtraction
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
  //example output(3 + 4 * 5);
  
  //Equality/Identity Operators: 
  // == equality operator - checks to see if values on either side appear to be equivalent
  // === identity operator - is similar but always considers values of different types to be different
  // example: "my string" == "My string" -> false
  // example: "my string" == "my string" -> true
  // example: 5 == 5.000 -> true
  // example: 5 === 5.000 -> true
  // example: true == "my string" -> false
  // example: true == 5 -> false
  // example: NaN == NaN -> false


  //Logical Operators:
  // Used for comparing two boolean values (two booleans in, one boolean out)
  // regardless of two booleans being compared they'll be implicitly converted to the nearest boolean equivalent (true or false)
  // Try to keep logical operator comparisons grouped within parenthesis to make the order of operations more obvious (can be nested)
  // Most often seen are && (and - true if both operands are true) + || (or - true if either operand is true)
  //AND (&&) - means both sides must evaluate to true, for value to be true
  //OR (||) - means either side can evaluate to true, for a value of true 
  //example: true && true => true, because both sides are true
  //example: true || true => true, because at least one side is true 
  //example: true && false => false, because both sides must be true
  //example: true || false => true, because at least one side is true 
  // !true (NOT) => false
  // !false => true


  //Comparisons and Decisions:
  //If statement: pose a statement that is tested for a true or false result eg) if statement is true please run..etc.
  /*Syntax: 
            if (false) { 
                alert( "This code is ignored, evaluated to false!" ); (UNDEFINED)
            }
            if (true) {
                alert ( "This code runs; evaluated to true!");
            }

  //Else Statement: a default set of instructions that takes places only if your "if" condition evaluates to false (fallback)
  // Must immediately follow an "if" code block, cannot stand alone
  // Syntax:
  /* if (false) {
    alert( "This code is ignored; evaluated to false!");
  } else {
    alert ( "This code runs; else is the default if the above fails!");
  } */

  //Else If Statement: placed in between an if statement and else statement, you can chain many together if needed
  //They use keywords "else if",, followed by parentheses containing an expression, and a code block with instructions
  //Syntax: 
  /*
  if ( 3 > 2 ) {
    alert( "3 isn's less than 2, so this won't run!");
  } else if ( 1 > 7 ) {
    alert ( "1 isn't greater than 7, so this won't run either!" );
  } else {
    alert ( "Since the above failed, we'll see this alert message!" );
  }
  */

  /* 
    if (1 < 2 ){
    output ("first statement.");
  } else if (2 < 3){
    output ("second statement");
  } else {
    output ("third statement"); //else cannot have a condition in parenthesis - it's a catch all
  } 
  */

  /*
  let userName = await input("Please enter your username: ");
  if (userName == "Joe" ){
    output("Welcome back user:" + userName);
  } else {
    output("Error, user: " + userName + " does not exist, please register.")
  }
  */

  //Ternary Operator:
  //Reasons to use: Very concise, less lines used - don't attempt ternary on complex statements it's less readable
  //Used more for functional programming - ternary is an expression, if/else is a statement 
  //Syntax: condition? <expression if true> : <expression if false>
  //example:
  //userName == "Joe" ? output("Welcome back user: " + userName) : output("Error, user: " + userName + " does not exist, please register.");
  //Works much the same as if/else statement 
  //Alternate example:
  /*
  if (myGuess == 1) {
    output("You guessed right!")
  } else {
    output ("Wrong guess!") 
  } 
  */

  //Switch Statement:
  //Used when there are different conditions that will activate different code blocks
  //to prevent multiple conditions from activating we must include a break statement
  //if no case conditions are met, the code under default is activated 
  //Syntax:
  /* 
  switch (condition) {
    case x: 
        // code
        break;
    case y:
        //code
        break;
    default:
        //code
  }
  */
 //example: 
 /*
  let month = await input("Please enter the current month: ");
  month = Number(month); //cast string to number, reassign to variable (month)
  switch (month){
    case 1:
      output("It's January");
      break;
    case 2:
        output("It's February");
        break;
    case 3:
        output("It's March");
        break;
    case 4:
        output(It's April");
        break;
    case 5:
        output("It's May");
        break;
    case 6:
        output("It's June");
        break;
    case 7:
        output("It's July");
        break;
    case 8:
        output("It's August");
        break;
    case 9: 
        output("It's Septemner");
        break;
    case 10:
        output("It's October");
        break;
    case 11: 
        output("It's November");
        break;
    case 12:
        output("It's December");
        break;
    default:
        output("Not a real month!"); //does not need break; as it cannot cascade lower
  }
 */

  //Debugging Strategies:
  //Read your error messages: When there is an error in your code there will always be an error message
  //Message (this is a string that carries the error message)
  //Name (the type of error that has occured)
  //Stack (the stack trace of code executed when the error occured - gives last few lines before error occured)
  //example: error message: "Unhandled exception" error type: ReferenceError (because a variable is not defined) error was caught in scripts.js on line 3
  //Research your issues: Online tutorials, program documentation, stackoverflow, google etc. (you can google error messages)
  //Ask for help! - ask instructors, mentors, colleagues, classmates etc. - W3Schools, geeksforgeeks, published books 

  //Exercise Overview:
  /* 
 Introduction
 This assignment is meant to be an exercise to help you get used to writing relational and logical operators, and decisions in JavaScript. 
 Follow the instructions below to complete the task, and be sure to read the hints if you are lost! 
 If the hints do not help, be sure to reach out to us during office hours.

 Instructions:
 For this exercise, you will be creating a mock login system. 
 
 Ask the user to enter a username //let username = await input ("enter your user name");
 If the user does not enter anything, send an error message on the console to the user, //if statement 
 informing them that the username field cannot be blank //output string
 If the user enters anything other than “admin”, send an error message on the console to the user, //else statement
 informing them that the user does not exist //output string

 Ask the user to enter a password //let password = await input ("enter your password");
 If the user does not enter anything, send an error message on the console to the user, 
 informing them that the password field cannot be blank 
 If the user enters anything other than “adminpwd”, send an error message on the console 
 to the user, informing them that they have an incorrect password
 If the user enters a password that is less than 8 characters long, send an error message on 
 the console to the user, informing them that the password they provided is too short
 (hint: do some google searching on how to determine the length of an input)
  */
