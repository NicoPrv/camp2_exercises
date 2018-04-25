// Code two functions:
//
// weatherByLatitudeAndLongitude accept an input like 32.661343, 51.680374
// weatherByZipcode accept an input like "59000", "fr"
// Both should print the temperature in degrees celsius.
//
// weatherByLatitudeAndLongitude(32.661343, 51.680374);
// > 13°C
// weatherByZipcode("59000", "fr");
// > 11.29°C




const request = require ("request");

function weatherByLatitudeAndLongitude(latitude, longitude){

  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=ce0303d5204194fdac9ab754bc8355f2`,
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


function weatherByZipcode(zipCode,countryCode){

  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&units=metric&APPID=ce0303d5204194fdac9ab754bc8355f2`,
      method:"GET"
    },
    function(error, response, result) {
      if(result){
        const zipTemperature = JSON.parse(result).main.temp+"°C";
        console.log(zipTemperature);
        return zipTemperature ;
      }
    }
  );
}

//weatherByCity("Lille");
module.exports={
  weatherByLatitudeAndLongitude:weatherByLatitudeAndLongitude,
  weatherByZipcode:weatherByZipcode
}

//weatherByLatitudeAndLongitude(32.661343, 51.680374);
//weatherByZipcode(59200,"fr");
