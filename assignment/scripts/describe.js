// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/

// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to the string Dane
// We creat a conditional that checks to see is the name variable is exactly equale to the string Mary
// If the statement is true, the first block of code will be run and the consle output will be 'Hi, Mary!'
// If the statement is false, the second block of code will be run and the consle output will be 'How do you do?'
// In this case the statement would be false, so when this code is run the counsle output will be 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}
*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make two variables. One called secret, which is not set to anything. Another called code which is set to the number 123.
// We make a conditional that checks to see if the variable code is exactly equale to the number 123.
// If the statement is true, the variable secret is set to the string 'super' and the variable code has it's curent number value multiplied by 2.
// If false, the current values of secret and code remain the same.
// We make another conditional that checkes to see if the variable code is currently greater than 250.
// If the statement is ture, the variable secret will be changed to string 'duper'
// If false, the variable secret will not be changed and reamin the same.
// We creat a consle log to show the value of the variable secret.
// Since the first conditional was true and the second false, the output would be the string 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make three variables. isStudent which is set to 'ture', age which is set to the number 34, and zip which is set to the number 55407.
// We make a conditional with four different blocks. The first block checks to see if the variable isStudent is exactly equale to ture and if the value of the variable zip is greater than 80000.
// If the first block is true there will be a console log output with the string 'You're a student on the West Coast!'. If false the system would move on to the second block.
// The second block checks to see if the variable isStudent is exactly equale to false or if the vairable age have a number value less than 30.
// If the second block is true there will be a console log output with the string 'What are your hobbies'. If false the system moves on to the third block.
// The third block only checks to see if the variable isStudent is exactly equal to ture.
// If the third block is true there will be a console log output with the string 'Welcome to Prime'. If false, the system will move on to the fourth and fianl block.
// The fourth blcok dosn't check anything. If all previous blocks were false, then this block simply has the system run a console log that will output the string 'How about the weather?'
// Since the first two blocks were false and the third ture, the system would run the third block which would produce a console log output of the string 'Welcome to Prime!'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - the values of colorOne and colorTwo are the opposite of what the instructions ask for.
// Swap the values. colorOne should = blue. colorTwo should = red.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX ? - This is proably fine as is, but the instuctions don't specifiy if you need type coercion.
if (mix === true) {
  colorOne = 'purple';
}

*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX - Instuctions said 'and' not 'or'. Should be && not ||.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX - According to the instuctions, age and minAge should be swapped and be >= not <=. i.e. age >= minAge.
//FIX - The consle log outputs for the if and else sections need to be swapped.

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
