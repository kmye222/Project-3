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


/*  //rect(5*unit, 10*unit, unit*1485, unit*735);
  //rect(xA, yA, xA2, yA2);
  xA = 5*unit;
  yA = 10*unit;
  xA2 = unit*1485;
  yA2 = unit*735;*/

  //rect(5*unit, 10*unit, unit*1485, unit*735);
  //rect(xA, yA, xA2, yA2);
  wid = unit*495;
  hei = unit*367.5;

  xA = 5*unit;
  yA = 10*unit;

  xB = unit*495;
  yB = 10*unit;

  xC = unit*990;
  yC = 10*unit;

  xD = 5*unit;
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
