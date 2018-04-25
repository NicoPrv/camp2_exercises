const request = require("request");

function simpleGet(callback){
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function (error, response, result) {
      if(!error){
        return callback(result);
      }else{
        console.warn(error);
      }
    }
  );
}



function displayResult(result){
  console.log(result);
  return result;
}



function simpleGetWithParams(callback){
  request(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people\[0\]=Frieda&people\[1\]=Francis",
      method: "GET"
    },
    function (error, response, result) {
      if(!error){
        return callback(JSON.parse(result).args);
      }else{
        console.warn(error);
      }
    }
  );
}


function displayResult2(result){
  return result;
}




function validateTimestamp(callback){
  const date=new Date();
  let dateOK=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDay();
  request(
    {
      url: `https://postman-echo.com/time/valid?timestamp=${dateOK}`,
      method: "GET"
    },
    function (error, response, result) {
      if(!error){
        return callback(result);
      }else{
        console.warn(error);
      }
    }
  );
}


function displayResult3(result){
  return result;
}





simpleGet(displayResult);
simpleGetWithParams(displayResult2);


module.exports = {
  simpleGet: simpleGet,
  displayResult: displayResult,
  simpleGetWithParams:simpleGetWithParams,
  validateTimestamp:validateTimestamp

}
