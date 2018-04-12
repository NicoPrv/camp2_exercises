// See Sparta courses for the exercise summary
const orangeTree = {
//ATTRIBUTES
  seed : function () {
    this.height = 0 ;
    this.age = 0 ;
    this.oranges = 0 ;
    this.alive = true ;
  },

  pickAnOrange : function () {
    if (this.oranges > 0) {
      this.oranges-- ;
      return true;
    }
    return false ;
  },

  ageOneYear : function () {
    this.oranges = 0;
    this.age ++ ;

    if(this.age < 10){
      this.height += 25 ;
    } else if (this.age < 20){
      this.height += 10 ;
    } else {
      this.height += 0 ;
    }

    if (this.age > 4 && this.age < 10){
      this.oranges += 10 ;
    } else if (this.age > 4 && this.age < 20){
      this.oranges += 20 ;
    } else if (this.age > 19 && this.age < 40) {
      this.oranges += 5 ;
    } else {
      this.oranges += 0 ;
    }

    if (this.age > 50){
      if(Math.random() > 0.5){
        this.alive = true ;
      }
      else {
        this.alive = false ;
      }
    }


  }




};








module.exports = orangeTree;
