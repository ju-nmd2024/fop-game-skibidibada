function setup() {
  createCanvas(1000, 700);
}

function preload() {
  // earth image taken from https://pngimg.com/image/25361
  earthImage = loadImage("earthPNG.png"); //size 2579x2563
  // moon image taken from https://www.clipartmax.com/middle/m2i8H7G6i8d3Z5H7_file-moon-transparent-drawing/
  moonImage = loadImage("moonPNG.png"); // size 1000x1000
}
function draw() {
  background(255, 140, 0);
  //  image(earthImage, -100, 550, 1200, 500);
}
