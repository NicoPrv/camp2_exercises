// filter takes an array of integer and a function of filtering by using an higher order function
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
function filter(array, fn) {
  // Your code here

  // I create an empty array result that will contain my answer
  let result=[];

  // I check that functions inputs were Ok
  if(array.length !==0 && fn===pickEvenNumbers){
    // If OK, I filter the array
    result=array.filter(fn);
    //If not, I manage the case
  }else{
    return("tableau vide",array);
  }
  //I return the filtered array
  return result;
}

function pickEvenNumbers(number){
  // I check that the number is even or not
  return(number %2 === 0);
}

// Personal test seems to work fine
console.log(filter([0,1,456,786,51,2,3,4],pickEvenNumbers));

// do not remove this line, it is for tests
module.exports = filter;
