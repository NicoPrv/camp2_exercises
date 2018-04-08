// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]

// Your code here
let result ;
function filter (myArray, func) {
  result=[];
  if(myArray.length===0){
    console.log("Tableau vide");
  }else{
    myArray.forEach (func);
  }
  return result;
}
function pickEvenNumbers (number) {
  if (number % 2 === 0){
    result.push(number) ;
  }
  //return result;
}
function pickOddNumbers (number) {
  if (number % 2 !== 0){
    result.push(number) ;
  }
  //return result;
}
console.log(filter([0,2,4],pickEvenNumbers));

//console.log(filter([0,2,4],pickEvenNumbers));
// do not remove this line, it is for tests
module.exports = filter;
