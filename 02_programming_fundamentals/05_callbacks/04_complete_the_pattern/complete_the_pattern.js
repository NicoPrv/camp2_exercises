// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) up to n number of rows.
//
// *Note: Returning the pattern is not the same as Printing the pattern.*
//
// If n < 1 then it should return "" i.e. empty string.
//
// There are no whitespaces in the pattern other than the line breaks.
//
// * Hint: Use `\n` in string to jump to next line
// * Hint: `" abc\n ".trim()` will return `"abc"`
//
// ## Examples
//
// ```
// pattern(5)
// 1
// 22
// 333
// 4444
// 55555
//
// pattern(11)
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111
// ```


// Your code here

function pattern(size) {
  let result="";
  let str="";
  if (size>0){
    console.log("number OK");
    for (let i=1 ; i <= size ; i++){
      //console.log(i);
      result+=(i.toString(10).repeat(i));
      result+="\n";

    }return result.trim();
  }else{
    console.log("number NOK");
    return "";
  }
}


pattern(10);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = pattern;
