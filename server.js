//a very very simple server
//Hello Emily. We finally got it working!
//But, wait. I have so much more to say.

var express = require('express');
var app = express();
var dotenv = require('dotenv');
var PubNub = require('pubnub');
var bodyParser = require('body-parser');

var server = app.listen(8081, function () {
  console.log("Shazam! listening on port 8081");
})

dotenv.load();

var jsonParser = bodyParser.json()

app.use(express.static('public'));

var pubnub = new PubNub({
    publishKey : process.env.publishKey,
    subscribeKey : process.env.subscribeKey,
    secretKey: process.env.secretKey,
})

function publishSampleMessage(payload) {
    var publishConfig = {
        channel : "coco_channel_no_1",
        message : payload
    }
    pubnub.publish(publishConfig, function(status, response) {
        console.log(status, response);
    })
}

app.post('/sendPayload', jsonParser, function(request,response){
  console.log("payload delivered to server");
  response.sendStatus(200);
  console.log(request);
/*  var params= {
    R: 30,
    G: 30,
    B: 30,
    box: 6
  }*/
  //publishSampleMessage(params);
  console.log("payload delivered to server");
})

/*app.get('/box_1', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  var params= {
    R: 30,
    G: 30,
    B: 30,
    box: 1
  }
  publishSampleMessage(params);
  console.log("box 1 pressed");
})

app.get('/box_2', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  var params= {
    R: 30,
    G: 30,
    B: 30,
    box: 2
  }
  publishSampleMessage(params);
  console.log("box 2 pressed");
})

app.get('/box_3', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  var params= {
    R: 30,
    G: 30,
    B: 30,
    box: 3
  }
  publishSampleMessage(params);
  console.log("box 3 pressed");
})

app.get('/box_4', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  var params= {
    R: 30,
    G: 30,
    B: 30,
    box: 4
  }
  publishSampleMessage(params);
  console.log("box 4 pressed");
})

app.get('/box_5', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  var params= {
    R: 30,
    G: 30,
    B: 30,
    box: 5
  }
  publishSampleMessage(params);
  console.log("box 5 pressed");
})

app.get('/box_6', function(request,response){
  // response.json({"status":"success"});
  response.sendStatus(200);
  var params= {
    R: 30,
    G: 30,
    B: 30,
    box: 6
  }
  publishSampleMessage(params);
  console.log("box 6 pressed");
})*/
