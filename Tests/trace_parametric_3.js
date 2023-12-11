let time = 0; // Time variable
let path = []; // Array to store the path of the shape
let r = 150;
let rotationAngleX = 0;
let rotationAngleY = 0;
let rotatingAngleZ = 0;
let counter = 0;
let time_inc = .01;
let random_starts = []
let offset = 100;  

function setup() {
  createCanvas(600, 600, WEBGL); // Use 3D rendering mode (WEBGL)
  generateRandomStarts();
}

function draw() {
  background(30,30,30); 
  rotateCanvas();


    drawBeginning(time,r);
  
    runTrail();
    
    stopPath(offset);
    
  
    time += time_inc;

    console.log(time);
    console.log(path.length); 

}

function rotateCanvas(){

  rotateX(rotationAngleX);
  rotateY(rotationAngleY);
  rotationAngleX +=.01;
  rotationAngleY +=.01;
  //return {angle_x, angle_y};
}

function generateRandomStarts() {
    let r1 = random(0,1);
    random_starts.push(r1);
    let r2 = random(1,2);
    random_starts.push(r2);
    let r3 = random(1,2);
    random_starts.push(r3);
    let r4 = random(1,2);
    random_starts.push(r4);
  }

  function drawBeginning(){ 
    //Logic to draw the first point
    let x = r*cos(time);//1;//cos(PI*time); //.5*r * cos(3*PI*time) + .5 * r * cos(6 * time);
    let y = r*sin(PI*time);//sin(PI*time);//r*cos(5*PI*time);//r * sin(6*time); 
    let z = r*cos(PI*time);//.5*r * cos(time) + .5*r * sin(time);  
 
    stroke(255,0,0);  
    strokeWeight(3);
    point(x, y, z);
    //end logic to draw the leading point 


    let points = createVector(x, y, z)
    points.alpha = 255;
    path.push(points);
  }

  function runTrail() {
    noFill();
    beginShape();
    for (let i = 0; i < path.length; i++) {
      stroke(0, 255-i,i, path[i].alpha)
      vertex(path[i].x, path[i].y, path[i].z);
    path[i].alpha -= .2; 
    }
    endShape();
  }

  function stopPath(offset){
    if (path.length > ((2*PI)/time_inc)-230) {  
      path.splice(0, 1);
    }
    return; 
  }
