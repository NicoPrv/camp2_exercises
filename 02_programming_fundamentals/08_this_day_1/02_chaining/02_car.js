// See Sparta courses for the exercise summary


const car={



  start:function(){
    this.distance = 0;
    this.speed = 0 ;
    this.drivingTime = 0 ;
    this.distance = 0 ;
    return this ;
  },

  changeSpeed:function(speed){
    this.speed = speed ;
    return this ;
  },

  drive:function(drivingTime){
    this.drivingTime = drivingTime ;
    this.distance  += this.speed * this.drivingTime / 60 ;
    return this ;
  },

  showDistance:function(){
    //this.distance += this.speed * this.drivingTime / 60 ;
    console.log(this.distance + " Km");
    //return this.distance + " Km";
    return this ;
  }



};




console.log (car.start().changeSpeed(60).drive(60).changeSpeed(30).drive(60).showDistance());

module.exports = car;
