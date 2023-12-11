let xoff = 0; // Initial x offset for Perlin noise
let yoff = 0;
let pts = [];
let inc = .01;

purple_color = [[178,216,216],[102,178,178],[0,128,128], [0,102,102],[0,76,76]]//, 	(119,88,236), 	(91,62,201), 	(61,37,152)]

function setup() {
  createCanvas(800, 600);
  background(3,25,81);

  let numLines = 20; 
  for (let line = 0 ; line < numLines; line++ ){
    startNewLine(line, numLines); 
  }
}

function draw() {


}


function startNewLine(line1,numLines) {
  xoff = random(10); // Random initial offset for x
  yoff = random(10); // Random initial offset for y
  x = random(((line1-1)/numLines)*height,(line1/numLines)*height); // Random starting x-coordinate
  y = random(0,.3*height);//((line1-1)/numLines)*height,(line1/numLines)*height);   // Random starting y-coordinate 
  let colorR = int(random(0, 255));    
  let colorG = int(random(0, 255));        
  let colorB = int(random(0, 255));;    
  stroke(random(purple_color)); 
  strokeWeight(3);
  for (let i = 0; i < 100; i++) {
    line(x, y, x+ random([10,-10]), y + random([-1,1]));   
      
    let xOffset = map(noise(xoff), 0, 1, -8,10); // Change the range to control the randomness
    let yOffset = map(noise(yoff), 0, 1, 1, 6);        // Change the range to control the randomness
    x += xOffset;   
    y += yOffset;       
    xoff += .1; // Increment x offset for Perlin noise
    yoff += .1; // Increment y offset for Perlin noise
  }
}
