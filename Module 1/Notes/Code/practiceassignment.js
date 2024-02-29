

//practice exercise
let userName = await input("What is your name?");
let userAge = await input("How old are you (use a whole number)?");
let clownApproval = await input("Answer true, or false. Do you like clowns?");

output("Hello " + userName + "!");
output("I see you are " + userAge + " years old, and on the question of clowns you answered " + clownApproval);