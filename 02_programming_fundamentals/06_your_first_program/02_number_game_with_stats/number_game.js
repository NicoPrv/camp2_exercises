

//console.log(`the mystery number is ${mysteryNumber}`);

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tries=0;
const mysteryNumber = Math.floor(Math.random()*100);

const mock = function(stringToPass) {
  tries++;
  reader.question(stringToPass, strNumber => {
    if(!isNaN(strNumber)){
      let userNumber = Number(strNumber) ;

      if(userNumber > mysteryNumber && userNumber > 0 && userNumber < 101){
        //console.log("Too high");
        mock("Too high\n");
      } else if (userNumber < mysteryNumber && userNumber > 0 && userNumber < 101){
        //console.log("Too low");
        mock("Too low\n");
      } else if (userNumber === mysteryNumber){
        switch (tries){
          case 1:
            console.log ("WAOUH, first try, you're a magician aren't you ?");
            console.log("You won!");
            //mock("Try another number");
            break;

          default:
            console.log(`You won in ${tries} steps!`);
            //console.log(`You guessed the number in ${tries} times!`);
            break;

        }
        return reader.close();
      }else {
        //console.log("The number is between 1 and 100");
        mock("The number is between 1 and 100\n");
      }

    }else{
      console.log("This was not a number");
      mock("This was not a number\n");
      //mock("Try another number\n");
    }
  });
};

mock("What is your number?");
