// function setup() {
//   createCanvas(800, 800); // Create a canvas of width 800 and height 800
//   let radius = 200; // Set the radius of the large circle
//   let numCircles = 80; // Set the number of smaller circles
//   let angleIncrement = TWO_PI / numCircles; // Calculate the angle increment between smaller circles

//   // Calculate positions of smaller circles along the circumference of the large circle
//   for (let i = 0; i < numCircles; i++) {
//     let angle = i * angleIncrement; // Calculate the current angle
//     let x = width / 2 + radius * cos(angle); // Calculate x-coordinate of smaller circle
//     let y = height / 2 + radius * sin(angle); // Calculate y-coordinate of smaller circle
//     ellipse(x, y, 20, 20); // Draw smaller circle at (x, y) with a size of 20x20
//   }
// }


function setup() {
    createCanvas(400, 400); 
    background(220);
    
    strokeWeight(10); 
    point(100,100);
    
  
    strokeWeight(1); 
    point(200,100);
    
    //for( let j =0; j<20;+)
    //crookedCircle(60, 30,200,200);//, int(random(0,width)), int(random(0,height)));
    //crookedEllipse(radius = 100, steps = 30,majorAxis = 100,minorAxis = 50,centerX  = width/2, centerY = height/2);
  } 
  
  function draw() {
  
    //for(let x = 0; x ++; x < 100){
      //for(let y = 0; y ++; y <100){
      //   point()
      // }
  
  
  
  
    }
  
    // beginShape();
    // strokeWeight(2);
    // curveVertex(100,100);
    // curveVertex(150,50);
    // curveVertex(200,100);
    // curveVertex(200,200); 
    // curveVertex(mouseX,mouseY); 
    // endShape(CLOSE); 
  
  
  function crookedEllipse(radius, steps, majorAxis, minorAxis, centerX, centerY ){
    translate(centerX, centerY); // Move the origin to the center of the canvas
    
    stroke(12);
    
    let a = majorAxis; // Semi-major axis length
    let b = minorAxis;  // Semi-minor axis length
    
    beginShape();
    strokeWeight(1);
    stroke(255,0,0);
    for (let angle = 0; angle < TWO_PI; angle += TWO_PI/ steps)  {
      // Parametric equations for x and y points of the ellipse
      let radx = a + random(-radius /20, radius / 20); 
      let rady = b + random(-radius /20, radius / 20);
      let x = -radx * cos(angle); 
      let y = -rady * sin(angle); 
      circle(x, y, 15);  
    }
    endShape(CLOSE);  
  
  }
  
  
  function crookedCircle(radius, steps, centerX, centerY) {
    var xValues = [];
    var yValues = [];
    let ornt1 = random([-1,1]);
    let ornt2 = random([-1,1]);
    console.log(ornt1); 
    for (var i = 0; i < steps; i++) {
      let rad = radius + random(-radius /20,radius / 20) // you can change the 10 here to how intense you want the change to be;
      xValues[i] = (centerX + (1 * rad) * cos(PI * i / steps)); 
      yValues[i] = (centerY + (1 * rad) * sin(PI * i / steps)); 
    }
    beginShape();
      for(let i = 0; i < xValues.length; i ++){
          circle(xValues[i], yValues[i],12);   
      } 
     endShape(CLOSE);
    
  }