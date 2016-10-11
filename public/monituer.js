var pubnub = new PubNub({
  subscribeKey : 'sub-c-ebae0edc-863e-11e6-b8cb-02ee2ddab7fe'
})

var message_state = 0;

function setup(){
  createCanvas(400, 400);
  background(0);

  console.log("Subscribing..");
  pubnub.subscribe({
    channels: ['coco_channel_no_1'] //Change this!!!
  })
}

function draw(){

  background(0);
  textSize(20);
  fill(255, 102, 153);

  //a very simple state machine
  if(message_state==0){
    text("Under Construction", 100, 100);
  }
  else if(message_state==1){
    text("Box A", 100, 100);
  }
  else if(message_state==2){
    text("Box B", 100, 100);
  }
  else if(message_state==3){
    text("Box C", 100, 100);
  }
  else if(message_state==4){
    text("Box D", 100, 100);
  }
  else if(message_state==5){
    text("Box E", 100, 100);
  }
  else{
    text("Box F", 100, 100);
  }
}


pubnub.addListener({
  message: function(command){
    console.log(command);
    if(command.message=="box_A"){
      message_state=1;
      console.log("box A listener fired");
    }
    else if (command.message=="box_B"){
      message_state=2;
      console.log("box B listener fired");
    }
    else if (command.message=="box_C"){
      message_state=2;
      console.log("box C listener fired");
    }
    else if (command.message=="box_D"){
      message_state=2;
      console.log("box D listener fired");
    }
    else if (command.message=="box_E"){
      message_state=2;
      console.log("box E listener fired");
    }
    else if (command.message=="box_F"){
      message_state=2;
      console.log("box F listener fired");
    }
    else{
      message_state=0;
    }
  }
})
