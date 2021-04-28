
var tom, jerry
var garden

var tomImg, jerryImg
var tomImg1, jerryImg1
var tomImg2, jerryImg2
var gardenImg



function preload(){
  
  
  gardenImg = loadImage("images/garden.png");
  tomImg = loadAnimation("images/cat1.png");
  tomImg1 = loadAnimation("images/cat2.png","images/cat3.png");
  tomImg2 = loadAnimation("images/cat4.png");
  
  jerryImg = loadAnimation("images/mouse1.png");
  jerryImg1 = loadAnimation("images/mouse2.png", "images/mouse3.png");
  jerryImg2 = loadAnimation("images/mouse4.png");
  
}

function setup(){
  createCanvas(400, 400);
  
   garden = createSprite(150,100, 400, 400);
   garden.addImage(garden.png);


}


function draw() {
  background(220);
  drawSprites();
}