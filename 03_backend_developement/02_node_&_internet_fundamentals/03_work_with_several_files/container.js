
//let litersOfCoffee=0;
let litersOfCoffee=0;

function putLitersOfCoffee(numberOfLiters){
  litersOfCoffee += numberOfLiters ;
  return litersOfCoffee ;
}


function consumeLitersOfCoffee(numberOfLiters){
  if (litersOfCoffee<numberOfLiters){
    return false;
  }
    litersOfCoffee-=numberOfLiters;
    return true ;
}


function getQuantity(){
  return litersOfCoffee;
}

///ON EXPORTE PAS DES VARIABLES SAUF DES CONSTANTES
module.exports={
  getQuantity:getQuantity,
  putLitersOfCoffee:putLitersOfCoffee,
  consumeLitersOfCoffee:consumeLitersOfCoffee
}
