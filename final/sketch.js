let Mountains = [];
let yoff = 0.0;
let backgroundColor;

function setup() {
  let canvas = createCanvas(500, 400);
canvas.parent('p5js');
  
   for (let i = 0; i < 5; i++) {
    Mountains.push(new mountains(i * 100, height / 2));
  }
  
   backgroundColor = color(121, 183, 238);
  
  
}

function draw() {
  
  colorMode(RGB);
  background(backgroundColor);
   ocean();
  
   for (let i = 0; i < Mountains.length; i++) {
    Mountains[i].move();
    Mountains[i].display();
  }
   ocean() 
  
   
}


class mountains {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "rgb(255,255,255)";
    this.scale = 1;
  }
  
  move() {
    
    this.x = this.x + 2;
    if (this.x > width) {
      this.x = 0;
    }
    
    
  }
     display() {
       push();
   translate(0,-130);
       
        fill(240, 242, 255);
  strokeWeight(0);
  triangle(360, 130, 760, 500, -40, 500);
  
  fill(213, 212, 255);
  strokeWeight(0);
	beginShape();
		vertex(360, 130);
		vertex(485, 246);
		vertex(390, 200);
		vertex(360, 250);
  	vertex(320, 217);
  	vertex(225, 255);
	endShape(CLOSE);
       
        noStroke();
      fill(255,255,255);
  strokeWeight(0);
  triangle(100, 180, 500, 500, -260, 500);
  
  fill(231, 241, 255);
  strokeWeight(0);
	beginShape();
		vertex(100, 180);
		vertex(225, 280);
		vertex(145, 250);
		vertex(120, 290);
  	vertex(70, 260);
  	vertex(-20, 286);
	endShape(CLOSE);
       pop();
       
     
   
    
  }
}
 function ocean() {

  //wave source: https://p5js.org/examples/math-noise-wave.html

  //waves
  fill(67, 157, 171);
  noStroke();

  // We are going to draw a polygon out of the wave points
  beginShape();

  let xoff = 0; // Option #1: 2D Noise
  // let xoff = yoff; 

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }

  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
 

 
  
  
  
}
