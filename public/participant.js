var color; //integer that contains the color to be sent to the moniter.
var unit;
var xA1, yA1;
var xB1, yB1;
var xC1, yC1;
var xD1, yD1;
var xE1, yE1;
var xF1, yF1;
var wid, hei;

//unitH = windowHeight/700;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  console.log("Ready to listen to Input -->");
  
  unit = (windowWidth*windowHeight)/(700*1500);


/*  //rect(5*unit, 10*unit, unit*1485, unit*735);
  //rect(xA1, yA1, xA2, yA2);
  xA1 = 5*unit;
  yA1 = 10*unit;
  xA2 = unit*1485;
  yA2 = unit*735;*/

  //rect(5*unit, 10*unit, unit*1485, unit*735);
  //rect(xA1, yA1, xA2, yA2);
  wid = unit*495;
  hei = unit*367.5;

  xA1 = 5*unit;
  yA1 = 10*unit;

  xB1 = unit*495;
  yB1 = 10*unit;

  xC1 = unit*990;
  yC1 = 10*unit;

  xD1 = 5*unit;
  yD1 = unit*367.5;

  xE1 = unit*495;
  yE1 = unit*367.5;

  xF1 = unit*990;
  yF1 = unit*367.5;
}

function draw(){
  background(255);

/*  unitW = windowWidth/1433;
  unitH = windowHeight/700;*/

    strokeWeight(10*unit);
    stroke(50);
    fill(255);
    //rect(5*unit, 10*unit, unit*1485, unit*735);
    rect(xA1, yA1, wid, hei);
    rect(xB1, yB1, wid, hei);
    rect(xC1, yC1, wid, hei);
    rect(xD1, yD1, wid, hei);
    rect(xE1, yE1, wid, hei);
    rect(xF1, yF1, wid, hei);

}

function touchStarted() {
  if(mouseX>50&&mouseX<150&&mouseY>100&&mouseY<150){
    console.log("clicked on trigger_1");
    httpGet('/trigger_1');
  }

  if(mouseX>250&&mouseX<350&&mouseY>100&&mouseY<150){
    console.log("clicked on trigger_2");
    httpGet('/trigger_2');
  }

  if(mouseX>450&&mouseX<550&&mouseY>100&&mouseY<150){
    console.log("clicked on trigger_3");
    httpGet('/trigger_3');
  }

  if(mouseX>50&&mouseX<150&&mouseY>200&&mouseY<250){
    console.log("clicked on trigger_4");
    httpGet('/trigger_4');
  }

  if(mouseX>250&&mouseX<350&&mouseY>200&&mouseY<250){
    console.log("clicked on trigger_5");
    httpGet('/trigger_5');
  }

  if(mouseX>450&&mouseX<550&&mouseY>200&&mouseY<250){
    console.log("clicked on trigger_6");
    httpGet('/trigger_6');
  }
}
