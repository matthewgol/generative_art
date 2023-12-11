let time = 0; // Time variable
let path = []; // Array to store the path of the shape
let r = 150;
let rotationAngleX = 0;
let rotationAngleY = 0;
let rotatingAngleZ = 0;
let counter = 0;
let time_inc = .01;
let random_starts = []

function setup() {
  createCanvas(600, 600, WEBGL); // Use 3D rendering mode (WEBGL)
  generateRandomStarts();
}

function draw() {
  background(80); 
  rotateCanvas();


   //drawBeginning(time,random_starts);
    //Logic to draw the first point
    let x = .5*r * cos(1*time) + .5 * r * cos(2 * time);
    let y = r * sin(3*time); 
    let z = r * cos(time);  

    stroke(255,0,0); 
    strokeWeight(3);
    point(x, y, z);
    //end logic to draw the leading point 

    //store the points with alpha
    let points = createVector(x, y, z)
    points.alpha = 255;
    path.push(points);
    
    time+= time_inc;


    //run_trail();
//}
      // Draw the path as a continuous line
    noFill();
    
    beginShape();
    for (let i = 0; i < path.length; i++) {
      stroke(255,0,0, path[i].alpha)
      vertex(path[i].x, path[i].y, path[i].z);
    path[i].alpha -= 2; 
    }
    endShape();

    if (path.length > ((2*PI)/time_inc)-100) { 
        path.splice(0, 1);
      }
      
      time += time_inc;

}

function rotateCanvas(){

  rotateX(rotationAngleX);
  rotateY(rotationAngleY);
  rotationAngleX +=.01;
  rotationAngleY +=.01;
  //return {angle_x, angle_y};
}

function generateRandomStarts() {
    let r1 = random(1,2);
    random_starts.push(r1);
    let r2 = random(1,2);
    random_starts.push(r2);
    let r3 = random(1,2);
    random_starts.push(r3);
    let r4 = random(1,2);
    random_starts.push(r4);
  }

  function run_trail() {
    noFill();
    
    beginShape();
    for (let i = 0; i < path.length; i++) {
      stroke(255,0,0, path[i].alpha)
      vertex(path[i].x, path[i].y, path[i].z);
    path[i].alpha -= 2; 
    }
  }

