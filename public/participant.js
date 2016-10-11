//var request = require('request');
//const queryString = require('query-string');

//GLOBALS

var color; //integer that contains the color to be sent to the moniter.
var unit; //unit to multiply all screen demensional junk by to keep it all nice and ratioed.
var x1, y1;
var x2, y2;
var x3, y3;
var x4, y4;
var x5, y5;
var x6, y6;
var wid, hei;
var R, G, B;
var boxSelected;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  console.log("Ready to listen to Input -->");

  unit = (windowWidth*windowHeight)/(700*1500);

  wid = unit*495;
  hei = unit*367.5;

  x1 = unit*5;
  y1 = unit*10;

  x2 = unit*495;
  y2 = unit*10;

  x3 = unit*990;
  y3 = unit*10;

  x4 = unit*5;
  y4 = unit*367.5;

  x5 = unit*495;
  y5 = unit*367.5;

  x6 = unit*990;
  y6 = unit*367.5;

  R = 0;
  G = 0;
  B = 0;

  boxSelected = 0;
}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  unit = (windowWidth*windowHeight)/(700*1500);

  wid = unit*495;
  hei = unit*367.5;

  x1 = unit*5;
  y1 = unit*10;

  x2 = unit*495;
  y2 = unit*10;

  x3 = unit*990;
  y3 = unit*10;

  x4 = unit*5;
  y4 = unit*367.5;

  x5 = unit*495;
  y5 = unit*367.5;

  x6 = unit*990;
  y6 = unit*367.5;
}

function draw(){
  background(255);

/*  unitW = windowWidth/1433;
  unitH = windowHeight/700;*/

    strokeWeight(10*unit);
    stroke(50);
    fill(255);
    //rect(5*unit, 10*unit, unit*1485, unit*735);

  if(boxSelected==1){fill(R, G, B);}
  else{fill(255);}
  rect(x1, y1, wid, hei);

  if(boxSelected==2){fill(R, G, B);}
  else{fill(255);}
  rect(x2, y2, wid, hei);

  if(boxSelected==3){fill(R, G, B);}
  else{fill(255);}
  rect(x3, y3, wid, hei);

  if(boxSelected==4){fill(R, G, B);}
  else{fill(255);}
  rect(x4, y4, wid, hei);

  if(boxSelected==5){fill(R, G, B);}
  else{fill(255);}
  rect(x5, y5, wid, hei);

  if(boxSelected==6){fill(R, G, B);}
  else{fill(255);}
  rect(x6, y6, wid, hei);

}

function touchStarted() {

  R = 0;
  G = 0;
  B = 0;

  if(mouseX>x1 && mouseX<x1+wid && mouseY>y1 && mouseY<y1+hei){
    boxSelected = 1;
  }

  if(mouseX>x2 && mouseX<x2+wid && mouseY>y2 && mouseY<y2+hei){
    boxSelected = 2;
  }

  if(mouseX>x3 && mouseX<x3+wid && mouseY>y3 && mouseY<y3+hei){
    boxSelected = 3;
  }

  if(mouseX>x4 && mouseX<x4+wid && mouseY>y4 && mouseY<y4+hei){
    boxSelected = 4;
  }

  if(mouseX>x5 && mouseX<x5+wid && mouseY>y5 && mouseY<y5+hei){
    boxSelected = 5;
  }

  if(mouseX>x6 && mouseX<x6+wid && mouseY>y6 && mouseY<y6+hei){
    boxSelected = 6;
  }
}

function touchMoved(){
  R = touchX%255;
  G = touchY%255;
  B = (touchX*touchY)%255;
}

function touchEnded() {

console.log("Touch Ended");

var payload = {
  box: boxSelected,
  r: R,
  g: G,
  b: B
};

  //var url = getURL();

  //httpGet(getURL(), payload);

/*  
  const stringified = queryString.stringify(payload);

  location.search = stringified;

  console.log(location.search);
*/



/*request.get({url:url, qs:payload}, function(err, response, body) {
  if(err) { console.log(err); return; }
  console.log("Get response: " + response.statusCode);
});*/


  if(boxSelected==1){
    console.log("touched box_1");
    httpGet('/box_1');
  }

  if(boxSelected==2){
    console.log("touched box_2");
    httpGet('/box_2');
  }

  if(boxSelected==3){
    console.log("touched box_3");
    httpGet('/box_3');
  }

  if(boxSelected==4){
    console.log("touched box_4");
    httpGet('/box_4');
  }

  if(boxSelected==5){
    console.log("touched box_5");
    httpGet('/box_5');
  }

  if(boxSelected==6){
    console.log("touched box_6");
    httpGet('/box_6');
  }
}

//test
