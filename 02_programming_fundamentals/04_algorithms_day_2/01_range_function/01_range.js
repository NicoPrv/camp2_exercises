// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.
function range(number1, number2) {

  const myArray=[];
  //  myArray.push (number1);

  if(number1 > number2){
    for(let i=number1 ; i>=number2 ; i--){
      myArray.push(i);
    }

  }else if(number2 > number1){
    for(let i=number1 ; i<=number2 ; i++){
      myArray.push(i);
    }

    

  }

  return myArray;

}

console.log(range(3,10));


// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
