let cols, rows;
let scl = 20; // Size of each cell in the grid
let noiseStrength = 1; // Strength of the Perlin noise effect

function setup() {
  createCanvas(800, 600);
  cols = floor(width / scl);
  rows = floor(height / scl);
  // Set frame rate
  frameRate(20);
  background(0);
  for (let y = 0; y < rows/3; y++) {
    for (let x = 0; x < cols/2; x++) {
      let angle = noise(x * 0.1, y * 0.1, frameCount * 0.1) * TWO_PI* noiseStrength;
      let v = p5.Vector.fromAngle(angle);
      // Draw arrow at the center of the cell
      drawArrow(x * scl, y * scl, v, scl - 2, false);
    }
  } 

  for (let y = rows/3; y < rows; y++) {
    for (let x = cols/2; x < cols; x++) { 
      let angle = noise(x * 0.2, y * .05, frameCount * 0.1) * TWO_PI* noiseStrength;
      let v = p5.Vector.fromAngle(angle);
      // Draw arrow at the center of the cell
      drawArrow(x * scl, y * scl, v, scl - 2, true);
    }
  } 
}

function draw() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < hieght;y++) {
      strokeWeight(1);
      fill(255,255,255);
      line(x,y,width,height); 
      stroke(255);
  }
}
}

function drawArrow(x, y, vec, length,swap) {
  push();
  length = 15;
  translate(x, y);
  stroke((x),x,155);  
  strokeWeight(random(.01,.09)*100); 
  if(swap){
    stroke(y%256 * 2,y+50,y*2);     
    strokeWeight(random(.01,.2)*100);  
  }  
  
  fill(0, 90);
  curve(0,0,0, 0, vec.x * length, vec.y * length,vec.x * length-50, vec.y * length+50);  
  pop();
}
