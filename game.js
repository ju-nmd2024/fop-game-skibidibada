function setup() {
  createCanvas(outerWidth, outerHeight);
}

let gameState = true;
let xposition = width / 2;
let yposition = 100;
let sizeX = 100;
let sizeY = 100;
let velocityY = 0.2;
let acceleration = 0.2;

function preload() {
  // earth image taken from https://pngimg.com/image/25361
  earthImage = loadImage(
    "https://cdn.mos.cms.futurecdn.net/FaWKMJQnr2PFcYCmEyfiTm-1200-80.jpg"
  ); //size 2579x2563

  // moon image taken from https://www.clipartmax.com/middle/m2i8H7G6i8d3Z5H7_file-moon-transparent-drawing/
  moonImage = loadImage("moonPNG.png"); // size 1000x1000

  //space image taken from https://media.istockphoto.com/id/1509170124/vector/starry-space-night-blue-sky-seamless-pattern.jpg?s=612x612&w=0&k=20&c=YTq7eD2VhYN_P_AP8MA3dO9GknpOaQl8bAxMVnihoP0=
  spaceImage = loadImage("spacePNG.jpg"); //size 1224x688
}

function moon(x, y, s) {
  push();
  let a = 0;
  let b = 0;
  translate(x, y);
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
  let a = 0;
  let b = 0;
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

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(spaceImage);

  image(moonImage, 100, 100, 200, 100); //testing
  earth(xposition, 1200, 15);
  moon(xposition, yposition, 1);

  if (gameState == true) {
    yposition = yposition + velocityY;
    velocityY = velocityY + acceleration;

    if (keyIsDown(32)) {
      velocityY = velocityY - 0.7;
    }

    if (yposition > 550 && velocityY > 0.7) {
      gameState = false;
      console.log("died");
    } else if (yposition > 550 && velocityY < 0.7) {
      gameState = false;
      console.log("win");
    }
  }
}
