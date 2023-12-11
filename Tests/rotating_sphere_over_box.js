let angle = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(240);

  // Set rotation angle based on frame count for continuous rotation
  angle += 0.001;

  // Apply rotation along the vertical axis (Y-axis)
  rotateY(angle);

  stroke(200);
  noFill();
  sphere(80);
  
  // Draw a box
  translate(0,1/4*height)
  stroke(200);
  noFill();
  box(200,30,200);
  

}