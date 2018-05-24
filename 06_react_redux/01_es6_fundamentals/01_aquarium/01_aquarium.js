// Insert code here

class Algae {
  constructor (size){
    this.size = size ;
  }

}

class Aquarium{

  constructor(tab1 = [],tab2 = []){
    this.fishes = tab1;
    this.algaes = tab2;
  }

  addFish(fish){
    this.fishes.push(fish);
  }

  addAlgae(algae){
    this.algaes.push(algae);
  }


  endTurn(){
    console.log("nb algues : " + this.algaes.length);

    this.fishes.forEach((fish, index) => {
      console.log("fish name : " + fish.name,"sex : " + fish.sex);
      if(fish.diet === 1){

        if(this.algaes.length > 0){
          this.algaes.pop();
        }

      }else{

        if (this.fishes.length > 1){

          if(index === this.fishes.length-1){
            this.fishes.shift();
          }

        }else{
          this.fishes.pop();
        }

      }
    });
  }

  endTurn(){
    console.log("nb algues : " + this.algaes.length);

    this.fishes.forEach((fish, index) => {
      console.log("fish name : " + fish.name,"sex : " + fish.sex);
      if(fish.diet === 1){

        if(this.algaes.length > 0){
          this.algaes.pop();
        }

      }else{

        if (this.fishes.length > 1){

          if(index === this.fishes.length-1){
            this.fishes.shift();
          }

        }else{
          this.fishes.pop();
        }

      }
    });
  }

}

class Fish  {
  constructor(fishName, fishSex, fishDiet){
    this.name = fishName ;
    this.sex = fishSex ;
    this.diet = fishDiet ;
  }
}



const myAquarium = new Aquarium ([],[]);

myFish=new Fish("Némo", "M", 0);
myAquarium.addFish(myFish);

myFish3=new Fish("Bar", "M", 1);
myAquarium.addFish(myFish3);

myFish2=new Fish("Doris", "M", 1);
myAquarium.addFish(myFish2);

myAlgae = new Algae (29);
myAquarium.addAlgae(myAlgae);

myAlgae2 = new Algae (43);
myAquarium.addAlgae(myAlgae2);

myAlgae2 = new Algae (398);
myAquarium.addAlgae(myAlgae2);




myAquarium.endTurn();
myAquarium.endTurn();
console.log(myAquarium.fishes);
console.log(myAquarium.algaes);

//myAquarium.fishes[0].eat();
// console.log(myAquarium.fishes);





module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
