var gameState = true;
var xposition = 1224 / 2;
var yposition = 100;
var lastyposition = yposition;
var sizeX = 100;
var sizeY = 100;
var xSizeButton = 100;
var ySizeButton = 100;
var xpositionButton = 0;
var ypositionButton = 0;
var velocityY = 0.2;
var acceleration = 0.2;
var a = 0;
var b = 0;
var s = 1;
var rotation = 0.1;
var threshhold;
var heatIncrease = 0;
var state = "start";

function preload() {
  // earth image taken from https://pngimg.com/image/25361
  earthImage = loadImage("earthPNG.png"); //size 2579x2563

  // moon image taken from https://www.clipartmax.com/middle/m2i8H7G6i8d3Z5H7_file-moon-transparent-drawing/
  moonImage = loadImage("moonPNG.png"); // size 1000x1000

  //space image taken from https://media.istockphoto.com/id/1509170124/vector/starry-space-night-blue-sky-seamless-pattern.jpg?s=612x612&w=0&k=20&c=YTq7eD2VhYN_P_AP8MA3dO9GknpOaQl8bAxMVnihoP0=
  spaceImage = loadImage("spacePNG.jpg"); //size 1224x688


  //start button image taken from https://www.freepik.com/free-vector/pixel-space-game-interface-with-start-button_26348347.htm
  //the rest is edited from the button image and font
  startButtonImage = loadImage("startbuttonPNG.png"); 
  backButtonImage = loadImage("backbuttonPNG.png"); 
  titleImage = loadImage("titlePNG.png"); 
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

function startButton(x,y,s){
  push();
  translate(x+xposition,y+480);
  image(
    startButtonImage,
    a - (2*xSizeButton * s) / 2,
    b - (ySizeButton * s) / 2,
    2*xSizeButton * s,
    ySizeButton * s
  );
  pop(); 
}
function backButton(x,y,s){
  push();
  translate(x,y);
  image(
    backButtonImage,
    a - (2*sizeX * s) / 2,
    b - (sizeY * s) / 2,
    2*sizeX * s,
    sizeY * s 
  ); 
  pop(); 
}

function title(x,y,s){
  push();
  translate(x,y);
  image(
    titleImage,
    a - (6*sizeX * s) / 2,
    b - (sizeY * s) / 2,
    6*sizeX * s,
    sizeY * s
  );
  pop();   
}     

function startScreen(){
  createCanvas(1224, 688);   
  background(spaceImage);
  startButton(xpositionButton,ypositionButton,1.4);
  title(xposition,200,1.4);
 
}
function gameScreen(){
  createCanvas(1224, 688);
  background(spaceImage);

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
      heatIncrease = 0;
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
function resultScreen(){
  createCanvas(1224, 688); 
  background(spaceImage);
}

function mousePressed() {
  if (mouseX > xpositionButton && mouseX < xpositionButton + xSizeButton && mouseY > ypositionButton && mouseY < ypositionButton + ySizeButton) {
    console.log("Button is clicked");
  }
}
function draw() {
  if(state === "start"){
    startScreen();
  } else if(state === "game"){
    gameScreen();
  } else if(state === "result"){
    resultScreen();
  }
}
