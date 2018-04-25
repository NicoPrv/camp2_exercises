// See Sparta courses for the exercise summary
const container = require ("./container.js");

const machine = {

fillWithLitersOfCoffee:function(quantity){
  container.putLitersOfCoffee(quantity);
},

  expresso:function(){
      return container.consumeLitersOfCoffee(0.08) ;
      console.log("I serve you an expresso!");
  },

  longCoffee:function(){
    return container.consumeLitersOfCoffee(0.15) ;
  }

};



machine.fillWithLitersOfCoffee(10);
console.log(machine.expresso()); // => true
console.log(container.getQuantity()); // => 9.92
console.log(machine.longCoffee()); // => true
console.log(container.getQuantity()); // => 9.77
console.log(machine.expresso()); // => false

module.exports = machine;
