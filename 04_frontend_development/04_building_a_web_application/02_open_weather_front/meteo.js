const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;



app.listen(port, function () {
  console.log("Server listening on port:" + port);
});




app.get("/:city", function getMeteoByCity(request, result) {
  fetch (
    //METTRE LA CLE API DANS UNE VARIABLE D'ENVIRONNEMENT
    `https://api.openweathermap.org/data/2.5/weather?q=${request.params.city}&units=metric&APPID=ce0303d5204194fdac9ab754bc8355f2`,
    {method:"GET"}
  )
  .then ((resultat)=>(resultat.json()))
  .then ((jsonResult)=>(jsonResult.weather[0].icon))
  .then (imageId => result.send(`<img src="https://openweathermap.org/img/w/${imageId}.png"/>`))
  .catch(error=>console.warn(error));
});
