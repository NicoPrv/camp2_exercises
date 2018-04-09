// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer




function squareDigits(number) {
  let numbersToSquarify = [];
  let str = number.toString();
  for (let i=0 ; i<str.length ; i++){
    numbersToSquarify.push(parseInt(str.charAt(i),10));
  }
  //console.log(result);
  let resultSquared=(numbersToSquarify.map((number)=>number*number));
  return(parseInt(resultSquared.join(""),10));

  // Your code here
}






squareDigits(12);
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
