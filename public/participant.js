var unit;
var xA1, xA2, yA1, yA2;
var xB1, xB2, yB1, yB2;
var xC1, xC2, yC1, yC2;
var xD1, xD2, yD1, yD2;
var xE1, xE2, yE1, yE2;
var xF1, xF2, yF1, yF2;

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
  xA1 = 5*unit;
  yA1 = 10*unit;
  xA2 = unit*495;
  yA2 = unit*367.5;

  xB1 = unit*495;
  yB1 = 10*unit;
  xB2 = unit*495;
  yB2 = unit*367.5;

  xC1 = unit*990;
  yC1 = 10*unit;
  xC2 = unit*495;
  yC2 = unit*367.5;

  xD1 = 5*unit;
  yD1 = unit*367.5;
  xD2 = unit*495;
  yD2 = unit*367.5;

  xE1 = unit*495;
  yE1 = unit*367.5;
  xE2 = unit*495;
  yE2 = unit*367.5;

  xF1 = unit*990;
  yF1 = unit*367.5;
  xF2 = unit*495;
  yF2 = unit*367.5;
}

function draw(){
  background(255);

/*  unitW = windowWidth/1433;
  unitH = windowHeight/700;*/

    strokeWeight(10*unit);
    stroke(50);
    fill(255);
    //rect(5*unit, 10*unit, unit*1485, unit*735);
    rect(xA1, yA1, xA2, yA2);
    rect(xB1, yB1, xB2, yB2);
    rect(xC1, yC1, xC2, yC2);
    rect(xD1, yD1, xD2, yD2);
    rect(xE1, yE1, xE2, yE2);
    rect(xF1, yF1, xF2, yF2);

}

function mouseClicked() {
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
