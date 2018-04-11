// This function will clear the terminal when called
//const clear = require("cli-clear");


// const readline = require("readline");
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


function app(){

const cards=["🐰","🐰","🎃","🎃","🌲","🌲"];
const shuffleCards=[];
const randomNumbersArray=[];




while (randomNumbersArray.length<cards.length){
let randomNumber=Math.floor(Math.random()*cards.length);
if (!randomNumbersArray.includes(randomNumber)){
  randomNumbersArray.push(randomNumber);
  }
}

for (let i=0 ; i< cards.length ; i++){
cards.splice(randomNumbersArray[i],0,cards[i]);
 }

console.log(cards);
console.log(randomNumbersArray);
console.log(shuffleCards);

}

app();
//
// let tries=0;
// const mysteryNumber = Math.floor(Math.random()*100);
//
// const mock = function(stringToPass) {
//   tries++;
//reader.question("Choose 2 cards (type 1 for card 1...) * * * * * * :", strNum => {

//console.log(cards);
//console.log(strNum);
//reader.close();
//});

//return reader.close();
//mock("What is your number?");
