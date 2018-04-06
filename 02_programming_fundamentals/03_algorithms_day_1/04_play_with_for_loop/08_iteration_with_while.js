// ## Iteration on arrays using while
//
// -  Create an array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each values of the table.
const litteralDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const arraySize = litteralDigits.length;

let i=0;

while(i<arraySize){
  console.log(litteralDigits[i]);
  i++;

}
