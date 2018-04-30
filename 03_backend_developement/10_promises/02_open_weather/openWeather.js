const fetch = require("node-fetch");

function weatherByCityName(city){
let myCity = city;
fetch (
  `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&APPID=ce0303d5204194fdac9ab754bc8355f2&units=metric`,
  {method:"GET"}
)
.then ((result)=>(result.json()))
.then ((result)=> console.log(`Temperature at ${myCity} is ${result.main.temp} °C`));
}


function weatherByLatitudeAndLongitude(latitude, longitude){
let lat = latitude;
let long = longitude;
fetch (
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=ce0303d5204194fdac9ab754bc8355f2&units=metric`,
  {method:"GET"}
)
.then ((result)=>(result.json()))
.then ((result)=> console.log(`Temperature at latitude ${lat}, longitude ${long} is ${result.main.temp} °C`))
.catch((error)=>console.warn(error));
}


weatherByCityName("Lille");
weatherByLatitudeAndLongitude(35,139);
