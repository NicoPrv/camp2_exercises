/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
This function will return a new array where some values will have been modified:
- if the number is divisible by 3: `Fizz`;
- if the number is divisible by 5: `Buzz`;
- if the number is divisible by 3 and 5 : `FizzBuzz`
- otherwise, the value is preserved.

YOU MUST USE array.map
*/

function fizzBuzz(list) {
  return list.map(fb);
}

function fb(number) {
  if (number %3 === 0 && number %5 === 0) {
    return "FizzBuzz";
  }else if (number %3 === 0){
    return ("Fizz");
  }else if (number %5 === 0){
    return ("Buzz");
  }else{
    return number;
  }
}

console.log(fizzBuzz([1,2,15,18,20,21,23,90]));




module.exports = fizzBuzz;
