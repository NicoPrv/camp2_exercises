// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```


str="*";
blank="";

for (let i=5 ; i>=0 ; i--){
  str=blank+str.repeat(i);
  console.log(str);
}
