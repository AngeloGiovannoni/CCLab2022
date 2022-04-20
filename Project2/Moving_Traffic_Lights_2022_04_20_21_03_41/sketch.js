let noisePos = 0;
let angle = 0;

function setup() {
  createCanvas(600, 600);
  //setupGif(40);
}

function draw() {
  //beginGif();

  let spacing = 20;
  let Rectangles = 7;
  let rectWidth = width / Rectangles;
  for (let x = 0; x < width; x += spacing + rectWidth) {
    fill(map(noise(noisePos), 0, 1, 0, 255));
    noisePos = noisePos + 0.005;
    fill(random(0, 255), 5);
    rect(x, 0, rectWidth, height);
  }

  push();
  stroke(0);
  strokeWeight(12);
  line(-500, 100, 600, 110);

  fill(0);
  ellipse(110, 110, 20, 20);
  ellipse(320, 110, 10, 10);
  ellipse(500, 110, 20, 20);

  line(110, 140, 110, 120);
  line(322, 200, 320, 110);
  line(500, 100, 500, 200);

  stroke(0);
  strokeWeight(9);
  rectMode(CENTER);
  rect(width / 5.5, height / 2.7, 90, 175);
  rect(width / 1.86, height / 3.25, 60, 110);
  rect(width / 1.2, height / 2.7, 90, 175);
  pop();

  stroke(250);
  strokeWeight(6);

  if (frameCount % 500 > 333) {
    fill("red");
    ellipse(110, 275, 35, 35);
  } else if (frameCount % 500 > 166.5) {
    fill("yellow");
    ellipse(110, 219, 35, 35);
  } else {
    fill("green");
    ellipse(110, 163, 35, 35);
  }

  if (frameCount % 325 > 111) {
    fill("green");
    ellipse(322, 222, 25, 25);
  } else if (frameCount % 325 > 55.5) {
    fill("yellow");
    ellipse(322, 185, 25, 25);
  } else {
    fill("red");
    ellipse(322, 148, 25, 25);
  }

  let r = map(sin(radians(angle)), -1, 1, 0, 255);
  let b = map(cos(radians(angle)), -1, 1, 0, 255);
  angle = angle + 30;
  fill(r);
  ellipse(500, 219, 35, 35);
  ellipse(500, 275, 35, 35);
  ellipse(500, 163, 35, 35);

 // endGif(500);
}

