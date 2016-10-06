//a very very simple server

var express = require('express');
var app = express();

app.use(express.static('public'));

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
