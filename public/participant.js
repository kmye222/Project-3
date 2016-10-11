var color; //integer that contains the color to be sent to the moniter.
var unit; //unit to multiply all screen demensional junk by to keep it all nice and ratioed.
var xA, yA;
var xB, yB;
var xC, yC;
var xD, yD;
var xE, yE;
var xF, yF;
var wid, hei;

//unitH = windowHeight/700;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  console.log("Ready to listen to Input -->");

  unit = (windowWidth*windowHeight)/(700*1500);

  wid = unit*495;
  hei = unit*367.5;

  xA = unit*5;
  yA = unit*10;

  xB = unit*495;
  yB = unit*10;

  xC = unit*990;
  yC = unit*10;

  xD = unit*5;
  yD = unit*367.5;

  xE = unit*495;
  yE = unit*367.5;

  xF = unit*990;
  yF = unit*367.5;
}

function draw(){
  background(255);

/*  unitW = windowWidth/1433;
  unitH = windowHeight/700;*/

    strokeWeight(10*unit);
    stroke(50);
    fill(255);
    //rect(5*unit, 10*unit, unit*1485, unit*735);
    rect(xA, yA, wid, hei);
    rect(xB, yB, wid, hei);
    rect(xC, yC, wid, hei);
    rect(xD, yD, wid, hei);
    rect(xE, yE, wid, hei);
    rect(xF, yF, wid, hei);

}

function touchStarted() {
  if(mouseX>xA&&mouseX<xA+wid&&mouseY>yA&&mouseY<yA+hei){
    console.log("clicked on box_A");
    httpGet('/box_A');
  }

  if(mouseX>250&&mouseX<350&&mouseY>100&&mouseY<150){
    console.log("clicked on box_B");
    httpGet('/box_B');
  }

  if(mouseX>450&&mouseX<550&&mouseY>100&&mouseY<150){
    console.log("clicked on box_C");
    httpGet('/box_C');
  }

  if(mouseX>50&&mouseX<150&&mouseY>200&&mouseY<250){
    console.log("clicked on box_D");
    httpGet('/box_D');
  }

  if(mouseX>250&&mouseX<350&&mouseY>200&&mouseY<250){
    console.log("clicked on box_E");
    httpGet('/box_E');
  }

  if(mouseX>450&&mouseX<550&&mouseY>200&&mouseY<250){
    console.log("clicked on box_F");
    httpGet('/box_F');
  }
}

//test
