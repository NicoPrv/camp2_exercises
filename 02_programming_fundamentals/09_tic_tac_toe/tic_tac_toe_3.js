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
  console.log (`\n${gridState[0]}  | ${gridState[1]}  | ${gridState[2]} \n------------\n${gridState[3]}  | ${gridState[4]}  | ${gridState[5]}\n------------\n${gridState[6]}  | ${gridState[7]}  | ${gridState[8]}`);
}

function chooseAPlayerRandomly(){
  let randomNumber = Math.round(Math.random());
  randomNumber ===0 ? currentPlayer = "❌  player 1" : currentPlayer = "⭕️  player 2";
  return currentPlayer ;
}

function start(){
  clear();
  displayGrid();
  askUserToPlay(`\n::: Welcome to super Tic Tac Toe ::: \n ${chooseAPlayerRandomly()}, your turn ! pick your cell \n`);
}

function getNextPlayer(player){
  player=currentPlayer;
  if(currentPlayer === "❌  player 1"){
    currentPlayer = "⭕️  player 2";
  }else{
    currentPlayer = "❌  player 1";
  }
  return currentPlayer;
}

function checkUserInput(input){
  let inputOK;
  if(!isNaN(input) && input>0 && input<10 && typeof gridState[input-1]==="number"){
    inputOK = true;
  }else{
    inputOK = false;
  }
  return inputOK;
}

function nextTurn(){
  if(gridState.some(elem => typeof elem === "number")){
    getNextPlayer(currentPlayer);
    askUserToPlay(`\n${currentPlayer}, your turn ! \n`);
  }else{
    console.log("\n::::: GAME OVER :::::");
    reader.close();
  }
}

function replayTurn(){
  displayGrid();
  askUserToPlay(`\nNot a valid choice ${currentPlayer}, please replay ! \n`);
}

function checkPlayer2Wins(){
  if((gridState[0]==="⭕️" && gridState[1]==="⭕️" && gridState[2]==="⭕️")
  ||(gridState[3]==="⭕️" && gridState[4]==="⭕️" && gridState[5]==="⭕️")
  ||(gridState[6]==="⭕️" && gridState[7]==="⭕️" && gridState[8]==="⭕️")
  ||(gridState[0]==="⭕️" && gridState[3]==="⭕️" && gridState [6]==="⭕️")
  ||(gridState[1]==="⭕️" && gridState[4]==="⭕️" && gridState [7]==="⭕️")
  ||(gridState[2]==="⭕️" && gridState[5]==="⭕️" && gridState [8]==="⭕️")
  ||(gridState[0]==="⭕️" && gridState[4]==="⭕️" && gridState [8]==="⭕️")
  ||(gridState[6]==="⭕️" && gridState[4]==="⭕️" && gridState [2]==="⭕️")){
    displayGrid();
    console.log("\n⭕️ ⭕️ ⭕️  PLAYER 2 WINS! ⭕️ ⭕️ ⭕️");
    console.log("\007");
    reader.close();
    finished = true ;
    return;
  }
}

function checkPlayer1Wins(){
  if((gridState[0]==="❌" && gridState[1]==="❌" && gridState[2]==="❌")
  || (gridState[3]==="❌" && gridState[4]==="❌" && gridState[5]==="❌")
  || (gridState[6]==="❌" && gridState[7]==="❌" && gridState[8]==="❌")
  || (gridState[0]==="❌" && gridState[3]==="❌" && gridState [6]==="❌")
  || (gridState[1]==="❌" && gridState[4]==="❌" && gridState [7]==="❌")
  || (gridState[2]==="❌" && gridState[5]==="❌" && gridState [8]==="❌")
  || (gridState[0]==="❌" && gridState[4]==="❌" && gridState [8]==="❌")
  || (gridState[6]==="❌" && gridState[4]==="❌" && gridState [2]==="❌")){
    displayGrid();
    console.log("\n❌ ❌ ❌  PLAYER 1 WINS! ❌ ❌ ❌");
    console.log("\007");
    reader.close();
    finished = true ;
    return;
  }
}

function askUserToPlay(message){
  reader.question(message, cell => {
    if (currentPlayer === "⭕️  player 2"){
      if(checkUserInput(cell)){
        gridState[cell-1]="⭕️";
        checkPlayer2Wins(cell);
      }else{
        replayTurn();
        return;
      }
    }else if (currentPlayer === "❌  player 1"){
      if(checkUserInput(cell)){
        gridState[cell-1]="❌";
        checkPlayer1Wins();
      }else{
        replayTurn();
        return;
      }
    }
    if(finished===false){
      displayGrid();
      nextTurn();
    }
  });
}

start();
