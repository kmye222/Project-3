var pubnub = new PubNub({
  subscribeKey : 'sub-c-f3ee9bac-8c06-11e6-a8c4-0619f8945a4f'
})

//var colour = color(255);
var message_state = 0;
var colour; //integer that contains the color to be sent to the moniter.
var unit; //unit to multiply all screen demensional junk by to keep it all nice and ratioed.
var x1, y1;
var x2, y2;
var x3, y3;
var x4, y4;
var x5, y5;
var x6, y6;
var wid, hei;
var R, G, B;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  unit = (windowWidth*windowHeight)/(700*1500);

  wid = windowWidth/3;
  hei = windowHeight/2;

  /*x1 = unit*5;
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
  y6 = unit*367.5;*/

  x1 = 0;
  y1 = 0;

  x2 = windowWidth*(1/3);
  y2 = 0;

  x3 = windowWidth*(2/3);
  y3 = 0;

  x4 = 0;
  y4 = windowHeight*(1/2);

  x5 = windowWidth*(1/3);
  y5 = windowHeight*(1/2);

  x6 = windowWidth*(2/3);
  y6 = windowHeight*(1/2);

  console.log("Subscribing..");
  pubnub.subscribe({
    channels: ['coco_channel_no_1'] //Change this!!!
  })
}

function draw(){

  background(0);
  textSize(20);
  fill(R, G, B);
  stroke(R, G, B);

  //a very simple state machine
  if(message_state==0){
    
  }
  else if(message_state==1){
    rect(x1, y1, wid, hei);
  }
  else if(message_state==2){
    rect(x2, y2, wid, hei);
  }
  else if(message_state==3){
    rect(x3, y3, wid, hei);
  }
  else if(message_state==4){
    rect(x4, y4, wid, hei);
  }
  else if(message_state==5){
    rect(x5, y5, wid, hei);
  }
  else{
    rect(x6, y6, wid, hei);
  }
}


pubnub.addListener({
  message: function(command){
    console.log(command);
    if(command.message.box==1){
      //colour = color(command.message.R, command.message.G, command.message.B);
      message_state=1;
      console.log("box 1 listener fired");
      R = command.message.r;
      G = command.message.g;
      B = command.message.b;
    }
    else if (command.message.box==2){
      //colour = color(command.message.R, command.message.G, command.message.B);
      message_state=2;
      console.log("box 2 listener fired");
      R = command.message.r;
      G = command.message.g;
      B = command.message.b;
    }
    else if (command.message.box==3){
      //colour = color(command.message.R, command.message.G, command.message.B);
      message_state=3;
      console.log("box 3 listener fired");
      R = command.message.r;
      G = command.message.g;
      B = command.message.b;
    }
    else if (command.message.box==4){
      //colour = color(command.message.R, command.message.G, command.message.B);
      message_state=4;
      console.log("box 4 listener fired");
      R = command.message.r;
      G = command.message.g;
      B = command.message.b;
    }
    else if (command.message.box==5){
      //colour = color(command.message.R, command.message.G, command.message.B);
      message_state=5;
      console.log("box 5 listener fired");
      R = command.message.r;
      G = command.message.g;
      B = command.message.b;
    }
    else if (command.message.box==6){
      //colour = color(command.message.R, command.message.G, command.message.B);
      message_state=6;
      console.log("box 6 listener fired");
      R = command.message.r;
      G = command.message.g;
      B = command.message.b;
    }
    else{
      message_state=0;
    }
  }
})
