
let time = 0; // Time variable
let path = []; // Array to store the path of the shape
let rotationAngleX = 0;
let rotationAngleY = 0;
let rotatingAngleZ = 0;
let counter = 0;
let time_inc = .01;

function setup() {
  createCanvas(600, 600, WEBGL); // Use 3D rendering mode (WEBGL)
}

function draw() {
  counter  +=1 ;  
  background(80);  
  //rotateScene(rotationAngleX, rotationAngleY); // Rotate the entire scene
  rotateX(rotationAngleX);
  rotateY(rotationAngleY);
  //rotateZ(rotationAngleZ);
  rotationAngleX +=.01;
  rotationAngleY -=.01;
  //rotationAngleZ -=.01;
  let r = 150; // Radius of the sphere
  
  // Calculate parametric equations based on time variable
  let x = .5*r * cos(7*time) + .5 * r * cos(1 * time);
  let y = r * sin(3*time); 
  let z = r * cos(time); 
  
  // Draw the rotating point
  stroke(255,0,0);
  strokeWeight(3);
  point(x, y, z);
  
  // Store the current position in the path array
  let points = createVector(x, y, z)
  points.alpha = 255;
  path.push(points);
  
  // Draw the path as a continuous line
  noFill();
  beginShape();
  for (let i = 0; i < path.length; i++) {
    stroke(255,0,0, path[i].alpha)
    vertex(path[i].x, path[i].y, path[i].z);
    path[i].alpha -= 2; 
  }
  endShape();
   
  if (path.length > ((2*PI)/time_inc)-4) { 
    path.splice(0, 1);
  }
  
  time += time_inc; // Increment the time variable for animation
  

  // let rotationAngleX = map(mouseX, 0, width, -PI, PI);
  // rotationAngleX += 5;
 
  // rotateX(rotationAngleX); // Rotate around x-axis
  // rotateY(rotationAngleY); // Rotate around y-axis


}

function rotateScene() {
//   let rotationAngleX = map(mouseX, 0, width, -PI, PI); // Map mouseX to rotation angle around x-axis
//   let rotationAngleY = map(mouseY, 0, height, -PI, PI); // Map mouseY to rotation angle around y-axis
   rotateX(rotationAngleX); // Rotate around x-axis
   rotateY(rotationAngleY); // Rotate around y-axis
}