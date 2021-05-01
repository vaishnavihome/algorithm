var car,wall

function setup() {
  createCanvas(1200,800);
  car=createSprite(10,600,60,60);
  car.velocityX=1
  wall=createSprite(900,600,60,600);
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

 if(istouching(car,wall)){
car.shapeColor="red"
text("hi maam",100,100)
 }
  drawSprites();
}
function istouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
 return true
  //return false

}} 