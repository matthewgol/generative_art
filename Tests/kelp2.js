let xoff = 0; // Initial x offset for Perlin noise
let yoff = 0;
let pts = [];
let inc = .01;

let start_points_x = [0,200, 400, 600];
let start_points_y = [0, 200, 400,600];       

//purple_color = [[178,216,216],[102,178,178],[0,128,128], [0,102,102],[0,76,76]]//, 	(119,88,236), 	(91,62,201), 	(61,37,152)]
purple_color = [[0, 102, 102]];

function setup() {
  createCanvas(800, 800); 
  background(3, 25, 81);

  // let numLines = 1; 
  // for (let line = 0; line < numLines; line++) {
  //   startNewLine(line, numLines,300,0);  
  // }

  for(let i = 0; i<start_points_x.length; i++){
    for(let j = 0; j<start_points_y.length; j++){ 
      startNewLine(0, 0, start_points_x[i], start_points_y[j]);
      j+=1; 
    }
  }
}

function draw() {


}


function startNewLine(line1, numLines, startX, startY) { 
  xoff = random(10); // Random initial offset for x
  yoff = random(10); // Random initial offset for y
  //x = random(width/2,height/2); // Random starting x-coordinate
  //y = random(0,0);//((line1-1)/numLines)*height,(line1/numLines)*height);   // Random starting y-coordinate 
  let vertical_line_flag = true;

  let x = startX;
  if (x == 0) {
    y = startY;
    vertical_line_flag = false; 
  }
  else {
    y = 0;
  }
  console.log(x,y);    
  stroke(random(purple_color));
  strokeWeight(1);
  for (let i = 0; i < 200; i++) { 
    circle(x, y, 12); 
    if (vertical_line_flag)  {
      let xOffset = map(noise(xoff), 0, 1, -15, 15);   // Change the range to control the randomness
      let yOffset = map(noise(yoff), 0, 1, 5, 5);
      console.log((x)) 
      console.log((xOffset))         // Change the range to control the randomness
      if (abs((xOffset+x)-x) > 10){
        xOffset = map(noise(xoff), 0, 1, -40, 40);
      }
      x += xOffset;
      y += yOffset; 
      xoff += 1; // Increment x offset for Perlin noise
      yoff += 1;  
    }

    else {
      let yOffset = map(noise(xoff), 0, 1, -30, 30);  // Change the range to control the randomness
      let xOffset = map(noise(yoff), 0, 1, 1, 13);        // Change the range to control the randomness
      x += xOffset;
      y += yOffset;
      yoff += 1; // Increment x offset for Perlin noise
      xoff += .1;
    }

  }
}
