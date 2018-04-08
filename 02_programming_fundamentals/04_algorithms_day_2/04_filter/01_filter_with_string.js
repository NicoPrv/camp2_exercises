// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]

// Your code here


//console.log ( filter ([1,3,4,5,19,22,67],"even") );
function filter(array, str) {
  let result=[];

  if (array.length === 0){
    result = array;
    console.log ("Tableau vide !");
  }

  else if(str==="even" && array !==[]){
    const newArrayEven=array.filter(isEven);
    result= newArrayEven;
  }

  else if(str==="odd" && array !==[]){
    const newArrayOdd=array.filter(isOdd);
    result= newArrayOdd;
  }
  else{
    console.log("Mauvais paramètre ou tableau vide");
    result= array;

  }
  return result;

}


function isEven(number){
  return number % 2 === 0 ;
}

function isOdd (number){
  return number % 2 !== 0;
}

// do not remove this line, it is for tests
module.exports = filter;
