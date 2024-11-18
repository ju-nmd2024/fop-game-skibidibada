function setup() {
  createCanvas(1224, 688);
}
var gameState = true;
var xposition = 1224 / 2;
var yposition = 100;
var lastyposition = yposition;
var sizeX = 100;
var sizeY = 100;
var velocityY = 0.2;
var acceleration = 0.2;
var a = 0;
var b = 0;
var s = 1;
var rotation = 0.1;
var threshhold;
var heatIncrease = 0;

function preload() {
  // earth image taken from https://pngimg.com/image/25361
  earthImage = loadImage("earthPNG.png"); //size 2579x2563

  // moon image taken from https://www.clipartmax.com/middle/m2i8H7G6i8d3Z5H7_file-moon-transparent-drawing/
  moonImage = loadImage("moonPNG.png"); // size 1000x1000

  //space image taken from https://media.istockphoto.com/id/1509170124/vector/starry-space-night-blue-sky-seamless-pattern.jpg?s=612x612&w=0&k=20&c=YTq7eD2VhYN_P_AP8MA3dO9GknpOaQl8bAxMVnihoP0=
  spaceImage = loadImage("spacePNG.jpg"); //size 1224x688
}

function moon(s) {
  push();
  image(
    moonImage,
    a - (sizeX * s) / 2,
    b - (sizeY * s) / 2,
    sizeX * s,
    sizeY * s
  );
  pop();
}

function earth(x, y, s) {
  push();
  translate(x, y);
  image(
    earthImage,
    a - (sizeX * s) / 2,
    b - (sizeY * s) / 2,
    sizeX * s,
    sizeY * s
  );
  pop();
}

function shadow() {
  push();
  noStroke();
  fill(0, 0, 0, 100);
  ellipse(xposition, threshhold + (sizeX * s) / 2, sizeX * s, 20);
  pop();
}

function heat(heatIncrease) {
  push();
  fill(255, 0, 0, heatIncrease);
  ellipse(xposition, yposition, sizeX * s, sizeY * s);
  pop();
}

function draw() {
  background(spaceImage);
  earth(xposition, 1200, 15);

  shadow();

  push();
  translate(xposition, yposition);
  rotate(rotation);
  moon(s);
  pop();
  heat(heatIncrease);

  if (gameState == true) {
    threshhold = 550 - (sizeY * s) / 2;
    yposition = yposition + velocityY;
    velocityY = velocityY + acceleration;

    if (yposition > lastyposition) {
      s = s + velocityY * 0.004;
      rotation = rotation + 0.1;
      heatIncrease = heatIncrease + 2;
    } else if (yposition < lastyposition) {
      s = s + velocityY * 0.004;
      rotation = rotation - 0.1;
    }
    lastyposition = yposition;
    if (keyIsDown(32)) {
      velocityY = velocityY - 0.7;
    }

    if (yposition > threshhold && velocityY > 0.9) {
      gameState = false;
      console.log("died");
    } else if (yposition > threshhold && velocityY < 0.9) {
      gameState = false;
      console.log("win");
    }
  }
}
