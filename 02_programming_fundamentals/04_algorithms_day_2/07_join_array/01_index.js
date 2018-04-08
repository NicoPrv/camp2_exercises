// Write a function `joinArray` and implement it using `reduce`:
// * Input: an array AND a string separator
// * Output: a string with each elements separated by the `separator`
//
// eg: join(["zero", "one", "two"], "-") => "zero - one - two"

let _separator="";


function joinArray(array, separator){
  _separator=separator;
  const output = array.reduce(join);
  //console.log output;
  console.log(output);
  return output;
}


function join(element){
  return element+_separator;
  //console.log("pouet");
}


//console.log(_separator);
joinArray(["un","deux","trois"],"-");

//joinArray(["zero","un","deux","trois"],"-");
// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = joinArray;
