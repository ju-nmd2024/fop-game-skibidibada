function setup() {
  createCanvas(1000, 688);
}

let xposition = 200;
let yposition = 200;
let sizeX = 200;
let sizeY = 200;

function preload() {
  // earth image taken from https://pngimg.com/image/25361
  earthImage = loadImage("earthPNG.png"); //size 2579x2563

  // moon image taken from https://www.clipartmax.com/middle/m2i8H7G6i8d3Z5H7_file-moon-transparent-drawing/
  moonImage = loadImage("moonPNG.png"); // size 1000x1000

  //space image taken from https://media.istockphoto.com/id/1509170124/vector/starry-space-night-blue-sky-seamless-pattern.jpg?s=612x612&w=0&k=20&c=YTq7eD2VhYN_P_AP8MA3dO9GknpOaQl8bAxMVnihoP0=
  spaceImage = loadImage("spacePNG.jpg"); //size 1224x688
}

function moon(x, y, s) {
  let a = 0;
  let b = 0;
  translate(x, y);
  image(moonImage, a, b, sizeX * s, sizeY * s);
}
function draw() {
  background(spaceImage);
  // moon(0,0,1);
  // image(earthImage, -100, 550, 1200, 500);
}
