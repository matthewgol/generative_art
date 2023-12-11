let points = [];

function setup() {
  createCanvas(600, 400);
  generatePoints();
}

function draw() {
  background(255);
  noFill();
  stroke(0);

  beginShape();
  for (let i = 0; i < points.length; i++) {
    curveVertex(points[i].x, points[i].y);
  }
  endShape();

  // Add new points to the line for a continuous appearance 
  //generatePoints();
}

function generatePoints() {
  let spacing = 10;
  let xOffset = 0;

  for (let x = 0; x < width + xOffset; x += spacing) {
      let y = height / 2 - random(-15,150);  
      points.push(createVector(x, y));   

  }
}