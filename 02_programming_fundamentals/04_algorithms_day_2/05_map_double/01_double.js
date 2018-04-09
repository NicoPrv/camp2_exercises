// Create a function `double` which take an array of integer as parameter and return a new array with all values doubled.
// WARNING: You're not allowed to use `Array.map`!

// Your code here...

function double(array){
  // I create an empty array result that will contain the output
  let result=[];
  // I iterate through the input array
  for (let i=0;i<array.length;i++){
    // I push in my result array the doubles values
    result.push(array[i]*2);
  }
  //test is OK

  // I return the result
  return result;
}

// Test
console.log(double([1,2,3]));


// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = double;
