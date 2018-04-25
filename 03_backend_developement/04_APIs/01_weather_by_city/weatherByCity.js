// Code the function weatherByCityName getting a city as input and prints the temperature from Open Weather such as:
//
// weatherByCity("Bogota")
// > 17°C


const request = require ("request");

function weatherByCity(city){

  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=ce0303d5204194fdac9ab754bc8355f2`,
      method:"GET"
    },
    function(error, response, result) {
      if(result){
        const cityTemperature = JSON.parse(result).main.temp+"°C";
        console.log(cityTemperature);
        return cityTemperature ;
      }
    }
  );
}

//weatherByCity("Lille");
module.exports=weatherByCity;
