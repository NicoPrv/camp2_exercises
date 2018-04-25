const OAuth = require("oauth");
const request = require ("request");
const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_KEY;
const urlWatson = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");



const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);


const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";

oauth.get(url + "realdonaldtrump", process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET, function (error, data) {
  if (error) {
    console.warn(error);
  }
  else {
    JSON.parse(data).forEach(function tweetTreat(tweet, index) {
      let text = tweet.text;
      //console.log("Tweet "+index+" "+text);
      const uri = encodeURI(urlWatson + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);
      request({ url: uri, headers: { "Authorization": auth } }, function watsonTreat (error, response, body) {
        console.log("\n\n ANALYSIS FOR THE TWEET : "+ text +"\n");
        let emotion = (JSON.parse(body).sentiment.document.label);

        if(emotion==="neutral"){
          console.log("😐   " + emotion+"\n");
          const neutral=(Object.entries(JSON.parse(body).emotion.document.emotion));
          neutral.forEach((element)=>{console.log(element.join(" : "))});
        }else if(emotion==="positive"){
          console.log("🙂   " + emotion+"\n");
          const positive=(Object.entries(JSON.parse(body).emotion.document.emotion));
          positive.forEach((element)=>{console.log(element.join(" : "))});
        }else if(emotion==="negative"){
          console.log("😕   " + emotion+"\n");
          const negative=(Object.entries(JSON.parse(body).emotion.document.emotion));
          negative.forEach((element)=>{console.log(element.join(" : "))});
        }

        console.log("\n------------------------------");
      });
    });
  }
});
