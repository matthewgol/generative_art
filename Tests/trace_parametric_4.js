let time = 0; // Time variable
let path = []; // Array to store the path of the shape
let r = 150;
let rotationAngleX = 0;
let rotationAngleY = 0;
let rotatingAngleZ = 0;
let counter = 0;
let time_inc = .005; 
let random_starts = []
let offset = 10; 
let flag = true; 

function setup() {
  createCanvas(600, 600, WEBGL); // Use 3D rendering mode (WEBGL)
  generateRandomStarts();
}

function draw() { 
   
  if (flag) {
    counter+=.25;
    if (counter > 20) {
      flag = false;
    }
  }
  else{
    counter -= .25;
    if (counter == 0){
      flag = true;
    }
  }

  background(counter,counter,counter);      
  rotateCanvas();


    drawBeginning(time,r);
  
    runTrail();
    
    stopPath(offset);
    
  
    time += time_inc;

    console.log(time);
    console.log(path.length); 
    console.log(random_starts);     

}

function rotateCanvas(){

  rotateX(rotationAngleX);
  rotateY(rotationAngleY);
  rotationAngleX +=.01;  
  rotationAngleY +=.01;
  //return {angle_x, angle_y};
}

function generateRandomStarts() {
    let r1 = int(random(0.01,.1)*100);
    random_starts.push(r1);
    let r2 = int(random(0.01,.1)*100);
    random_starts.push(r2);
    let r3 = int(random(0,.10)*100);
    random_starts.push(r3);
    let r4 = int(random(0,.1)*100);
    random_starts.push(r4);   
  } 

  function drawBeginning(){   
    //Logic to draw the first point
    let x = .5*r * cos(random_starts[0]*PI*time) + .5*r * cos(random_starts[1] *PI*time); // + .5 * r * cos(6 * time);
    let y = .5*r * sin(random_starts[2] *PI*time) + .5 *r * sin(random_starts[3]*PI*time);//sin(PI*time);//r*cos(5*PI*time);//r * sin(6*time); 
    let z = r*sin(PI*time);//.5*r * cos(time) + .5*r * sin(time);  
 
    stroke(255,255,255);  
    strokeWeight(3);    
    point(x, y, z);
    //end logic to draw the leading point 


    let points = createVector(x, y, z);  
    points.alpha = 200;
    path.push(points);
  }

  function runTrail() {
    noFill();
    beginShape();
    for (let i = 0; i < path.length; i++) {
      strokeWeight(4);
      stroke(i, 0,255-i, path[i].alpha)    
      vertex(path[i].x, path[i].y, path[i].z);
    path[i].alpha -= .2; 
    }
    endShape();
  }

  function stopPath(offset){
    let lcm = findPeriod(3,5);
    if (path.length > (2/time_inc)-offset) {    
      path.splice(0, 1);  
    }
    return; 
  }

  function findPeriod(B, D) {
    // Calculate the period of cosine function (2π / |B|)
    const cosPeriod = 2 * Math.PI / Math.abs(B);
    // Calculate the period of sine function (2π / |D|)
    const sinPeriod = 2 * Math.PI / Math.abs(D);
    // Find the least common multiple of the periods
    const lcm = (cosPeriod * sinPeriod) / gcd(cosPeriod, sinPeriod);
    return lcm;
}

// Function to calculate the greatest common divisor (GCD)
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
