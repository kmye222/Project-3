function setup(){
  createCanvas(800, 800);
  background(0);
  console.log("Ready to listen to Input -->");
}

function draw(){
  background(0);

  rect(50, 100, 100, 50);
  rect(250, 100, 100, 50);
  rect(450, 100, 100, 50);

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
}