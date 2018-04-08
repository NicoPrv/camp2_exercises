// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]

// Your code here


//console.log ( filter ([1,3,4,5,19,22,67],"even") );
let result = [] ;
function filter (myArray, oddOrEven) {

  if (myArray !== []){

    if (oddOrEven === "even") {
      myArray.forEach (filterEven);
    } else if (oddOrEven === "odd"){
      myArray.forEach (filterOdd);
    }

    return result;

  }


}

function filterEven (number) {
  if (number % 2 === 0){
    result.push(number) ;
  }
}

function filterOdd (number) {
  if (number % 2 !== 0){
    result.push(number) ;
  }
}


console.log(filter([1,2,3,4,5], "odd"));

// do not remove this line, it is for tests
module.exports = filter;
