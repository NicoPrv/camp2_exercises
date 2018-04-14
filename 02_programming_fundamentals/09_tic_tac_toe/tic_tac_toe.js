const readline = require("readline");
var clear = require('clear');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let currentPlayer;
let finished = false;
let gridState = new Array ;
gridState = [1,2,3,4,5,6,7,8,9];

function displayGrid(){
  console.log (`\n${gridState[0]} | ${gridState[1]} | ${gridState[2]} \n----------\n${gridState[3]} | ${gridState[4]} | ${gridState[5]}\n----------\n${gridState[6]} | ${gridState[7]} | ${gridState[8]}`);
}

function chooseAPlayerRandomly(){
  let randomNumber = Math.round(Math.random());
  randomNumber ===0 ? currentPlayer = "🎃  player 1" : currentPlayer = "🐰  player 2";
  return currentPlayer ;
}

function start(){
  clear();
  displayGrid();
  askUserToPlay(`::: Welcome to super Tic Tac Toe ::: \n ${chooseAPlayerRandomly()}, your turn ! pick your cell \n`);
}



function getNextPlayer(player){
  player=currentPlayer;
  if(currentPlayer === "🎃  player 1"){
    currentPlayer = "🐰  player 2";
  }else{
    currentPlayer = "🎃  player 1";
  }
  return currentPlayer;
}


function nextTurn(){
  if(gridState.some(elem => typeof elem === "number")){
    getNextPlayer(currentPlayer);
    askUserToPlay(`${currentPlayer}, your turn ! \n`);
  }else{
    console.log("GAME OVER");
    reader.close();
  }
}


function checkPlayer2Wins(){
  if((gridState[0]==="🐰" && gridState[1]==="🐰" && gridState[2]==="🐰")
  ||(gridState[3]==="🐰" && gridState[4]==="🐰" && gridState[5]==="🐰")
  ||(gridState[6]==="🐰" && gridState[7]==="🐰" && gridState[8]==="🐰")
  ||(gridState[0]==="🐰" && gridState[3]==="🐰" && gridState [6]==="🐰")
  ||(gridState[1]==="🐰" && gridState[4]==="🐰" && gridState [7]==="🐰")
  ||(gridState[2]==="🐰" && gridState[5]==="🐰" && gridState [8]==="🐰")
  ||(gridState[0]==="🐰" && gridState[4]==="🐰" && gridState [8]==="🐰")
  ||(gridState[6]==="🐰" && gridState[4]==="🐰" && gridState [2]==="🐰")){
    displayGrid();

    console.log("🐰  PLAYER 2 WINS!");
    console.log("\007");
    reader.close();
    finished = true ;
    return;
  }
}


function checkPlayer1Wins(){
  if((gridState[0]==="🎃" && gridState[1]==="🎃" && gridState[2]==="🎃")
  || (gridState[3]==="🎃" && gridState[4]==="🎃" && gridState[5]==="🎃")
  || (gridState[6]==="🎃" && gridState[7]==="🎃" && gridState[8]==="🎃")
  || (gridState[0]==="🎃" && gridState[3]==="🎃" && gridState [6]==="🎃")
  || (gridState[1]==="🎃" && gridState[4]==="🎃" && gridState [7]==="🎃")
  || (gridState[2]==="🎃" && gridState[5]==="🎃" && gridState [8]==="🎃")
  || (gridState[0]==="🎃" && gridState[4]==="🎃" && gridState [8]==="🎃")
  || (gridState[6]==="🎃" && gridState[4]==="🎃" && gridState [2]==="🎃")){
    displayGrid();
    //getNextPlayer();
    console.log("🎃  PLAYER 1 WINS!");
    console.log("\007");
    reader.close();
    finished = true ;
    return;
  }
}


function askUserToPlay(message){
  reader.question(message, cell => {
    if (currentPlayer === "🐰  player 2"){
      gridState[cell-1]="🐰";
      checkPlayer2Wins();

    }else{
      gridState[cell-1]="🎃";
      checkPlayer1Wins();
    }

    if(finished===false){
      displayGrid();
      nextTurn();
    }

  });
}

start();
