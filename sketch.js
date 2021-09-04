var path, pathImg
var jack,jackRunning
var invisibleWall1
var invisibleWall2
function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  jackRunning=loadAnimation("Runner-1.png","Runner-2.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,100,400)
  path.y=path.height/2
  path.velocityY=6
  path.addImage("path",pathImg)

  jack=createSprite(200,300,20,20)
  jack.scale = 0.05 ;
  jack.addAnimation("Running",jackRunning)
  
  invisibleWall1=createSprite(70,200,10,400)
  invisibleWall2=createSprite(330,200,10,400)
}

function draw() {
  background(0);
if(path.y>390){
  path.y=height/2
}

jack.x=World.mouseX
jack.collide(invisibleWall1)
jack.collide(invisibleWall2)

invisibleWall1.visible=false;
invisibleWall2.visible=false;


drawSprites()
}
