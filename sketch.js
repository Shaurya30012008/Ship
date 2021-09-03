var seaImg,shipImg,sea,ship;
function preload(){
  seaImg=loadImage("sea.png")
shipImg =loadAnimation("ship1.png","ship2.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  sea=createSprite(400,200)
  sea.addImage(seaImg)
  sea.velocityX=-5
  sea.scale=0.3
  
  ship=createSprite(130,200,30,30)
  ship.addAnimation("movingShip",shipImg)
  ship.scale=0.25
}

function draw() {
  background("blue");
  if (sea.x<0) {
    sea.x=sea.width/8
  }
 drawSprites();
}