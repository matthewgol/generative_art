let height = 400; 
let t = 0; 

function setup() {
  createCanvas(400, 400);
  background(220);
  circleX = width / 2;
  circleY = height / 2;
  circleSize = 50;
  frameRate(30); // Set the frame rate for the animation

  print("Hello World!")
}

function draw() {

  background(220);
  strokeWeight(1)
  let line1 = line(width/2,height/2,width,height); 
  strokeWeight(5);
  let line2 = line(width/2,height/2,0,height);
  strokeWeight(30);
  let line3 = line(width/2, height/2 +t, width/2, height/2 +t+10);

  //let line3 = line(width/2-t , height/2 +t ,width/2 + t ,height/2 + t);
  //let line4 = line(width/2-t - 20 , height/2 + t + 20 ,width/2 + t + 20 ,height/2 + t + 20); 

  let line_slope = (height - height/2) / (width - width/2);
  let b = line_slope * width/2 - height/2;

   



  t +=7; 
  if (t>height/2){ 
    t = 0;
  }
}

function drawLine(m, b,start,end) {
  stroke(0); // Set line color to black
  strokeWeight(2); // Set line thickness
  
  // Calculate y-coordinates based on the slope-intercept form
  let y1 = m * start + b; // When x is 0
  let y2 = m * end + b; // When x is width (the width of the canvas)
  
  
  //width/2, height/2

  line(start,y1,end,y2);
  //line(width/2, height/2, width, height); 
}