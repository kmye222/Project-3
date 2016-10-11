//a very very simple server
//Hello Emily. We finally got it working!
//But, wait. I have so much more to say.

var express = require('express');
var app = express();
var dotenv = require('dotenv');
var PubNub = require('pubnub');
var server = app.listen(8081, function () {
  console.log("Shazam! listening on port 8081");
})

dotenv.load();

app.use(express.static('public'));

var pubnub = new PubNub({
    publishKey : process.env.publishKey,
    subscribeKey : process.env.subscribeKey,
    secretKey: process.env.secretKey,
})

function publishSampleMessage(whichTrigger) {
    var publishConfig = {
        channel : "coco_channel_no_1",
        message : whichTrigger
    }
    pubnub.publish(publishConfig, function(status, response) {
        console.log(status, response);
    })
}

app.get('/box_A', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log("box A pressed");
})

app.get('/box_B', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log("box B pressed");
})

app.get('/box_C', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log("box C pressed");
})

app.get('/box_D', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log("box D pressed");
})

app.get('/box_E', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log("box E pressed");
})

app.get('/box_F', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  console.log("box F pressed");
})

// rely again on static server -->

// app.get('/', function(request,response){
//   // response.json({"status":"success"});
//   response.send(200, "waiting for your command, master");
//   console.log("standby, awaiting command");
// })

var server = app.listen(8081, function () {
  console.log("Shazam! listening on port 8081");
})
