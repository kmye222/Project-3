###PHASE 1 DONE IN SERVER.JS
  Set up triggers (like those in example 009) to eventually be the boxes. 
    This is then like a framework that we get to build on for the piece.
    
    • Create 6 triggers named box_1-box_6

###PHASE 2 DONE IN PARTICIPANT.JS
  Set up not pretty boxes (Like in 010) where we set off those triggers by clicking on those boxes
  
  • Draw 6 boxes
  
  • You link them to a box request
  
###PHASE 3 DONE IN MONITER.JS
  Getting which trigger was pressed and displaying that information.
  
###PHASE 4
  Color stuff
  
  touchStarted()/mouseDown()
  
      • Get the box touched with finger.
      
      • Set color to zero 
      
  touchMoved()/mouseDragged()
  
      • figure out a way to use the variables mouseX/touchX and mouseY/touchY to generate a number between 0 and 16777215.
      
      • %16777215 (make it switch back to 0 once it
      
  touchEnded()/mouseUp()
    
      • send color generated in touchMoved()/mouseDragged() and box touched in touchStarted()/mouseDown().
  
