// Write a function `joinArray` and implement it using `reduce`:
// * Input: an array AND a string separator
// * Output: a string with each elements separated by the `separator`
//
// eg: join(["zero", "one", "two"], "-") => "zero - one - two"

let _separator="";
let chaine="";
let arraySize;

function joinArray(array, separator){
  _separator=separator;
  arraySize=array.length;
  const output = array.reduce(join,0,array.length-1);
  //console.log output;
  console.log(output);
  return output;
}


function join(total, element){
  chaine+=element+""+_separator;
  return chaine;

  //console.log("pouet");
}


//console.log(_separator);
joinArray(["un","deux","trois"],"|");

//joinArray(["zero","un","deux","trois"],"-");
// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = joinArray;
