// let points = [];
// let t = 0;

// function setup() {
//   createCanvas(400, 400);
//   generateRandomPoints();
//   debugger; 

// }

// function draw() {
//   background(220); 
  
//   // Draw the random points
//   drawPoints(t);
  
//   // Draw lines between the points
//   //drawLines(); 


//   t+=2; 

// }

// function generateRandomPoints() {
//   for (let i = 0; i < 2; i++) {
//     let x = random(width); // Generate a random x-coordinate within canvas width
//     let y = random(height); // Generate a random y-coordinate within canvas height
//     points.push(createVector(x, y)); // Create a p5.Vector object and add it to the points array
//   }
// }

// function drawPoints(t) {
//   fill(255, 0, 0); // Set fill color to red
//   noStroke(); // No outline for the points
//   for (let i = 0; i < points.length; i++) {
//     if (points[i].x+t > width ){
//       points[i].x  = random(0,width);
//       points[i].y  = random(0,width);
//     }  
//     ellipse(points[i].x+t % width, points[i].y+t % width,  10, 10);   // Draw points as circles
//   }
//   return points;
// }

// function drawLines() {
//   stroke(0); // Set line color to black
//   strokeWeight(2); // Set line thickness
//   for (let i = 0; i < points.length; i++) {
//     let nextIndex = (i + 1) % points.length; // Get the index of the next point (loop back to the first point after the last one)
//     line(points[i].x, points[i].y, points[nextIndex].x, points[nextIndex].y); // Draw a line between points[i] and points[nextIndex]
//   }
// }

let points = [];
let t = 0;
let flag = true;

function setup() {
  createCanvas(400, 400);
  generateRandomPoints();
}

function draw() {
  background(220);

  // Draw the random points
  let updatedPoints = drawPoints(t);

  // Draw lines between the points
  // drawLines();

  if (flag == true){
    t +=.2;
    if (t>=5){
      flag = false;
    } 
    }
  
 
if (flag == false){
  t -=.2;
  if (t<=-15){
    flag = true;
  }
}


  points = updatedPoints; // Update the original points array with the updated points



}

function generateRandomPoints() {
  for (let i = 0; i < 1; i++) {
    let x = random(width); // Generate a random x-coordinate within canvas width
    let y = random(height); // Generate a random y-coordinate within canvas height
    points.push(createVector(x, y)); // Create a p5.Vector object and add it to the points array
  }
}

function drawPoints(t) {
  let updatedPoints = [];
  fill(50, 50, 50); // Set fill color to red
  noStroke(); // No outline for the points
  for (let i = 0; i < points.length; i++) {
    let wrappedX = (points[i].x + t) % width;
    let wrappedY = (points[i].y + -random(1,3.5)) % height;
    if (wrappedX < 0) {
      wrappedX += width; // Wrap negative x values around to the right edge
    }
    if (wrappedY < 0) {
      wrappedY += height; // Wrap negative y values around to the bottom edge
    }
    ellipse(wrappedX, wrappedY, 10, 10); // Draw points as circles, wrapping around if needed
    updatedPoints.push(createVector(wrappedX, wrappedY));
  }
  return updatedPoints;
}
