// See Sparta courses for the exercise summary


const machine = {

  litersOfCoffee:0,

  fillWithLitersOfCoffee:function(liters){
    this.litersOfCoffee += liters ;
    console.log(this);
  },

  expresso:function(){
    if(this.litersOfCoffee*100 >= 8){
      this.litersOfCoffee -= (8/100) ;
      console.log(this);
      return true ;
      //console.log("I serve you an expresso!");

    }
    return false ;
    //console.log(this);

  },

  longCoffee:function(){
    //console.log(this.litersOfCoffee*100);
    if(this.litersOfCoffee*100 >= 15){
      this.litersOfCoffee -= (15/100) ;
      console.log(this);
      return true ;
    }
    return false ;
  }


};

//console.log(machine.fillWithLitersOfCoffee(10));

// Coffee Machine usage. Insert your code above this comment

// machine.litersOfCoffee = 0.33;
// console.log(machine);
// console.log(machine.longCoffee());



machine.fillWithLitersOfCoffee(10);
console.log(machine.expresso()); // => true
console.log(machine.litersOfCoffee); // => 9.92
console.log(machine.longCoffee()); // => true
console.log(machine.litersOfCoffee); // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee); // => 0.02
console.log(machine.expresso()); // => false

module.exports = machine;
