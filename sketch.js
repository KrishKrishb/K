var fixedRect, movingRect;

var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car=createSprite(200,200,40,40);
  car.shapeColor="blue";
  car.velocityX = 4;

  wall=createSprite(1000,200,20,220);
  wall.shapeColor="pink";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(car,wall)){
   car.shapeColor="orange";
 }
  drawSprites();
}

  function isTouching(Object1,object2){
    if (Object1.x - Object2.x < Object2.width/2 + Object1.width/2
      && Object2.x - Object1.x < Object2.width/2 + Object1.width/2
      && Object1.y - object2.y < object2.height/2 + Object1.height/2
      && object2.y - object2.y < Object2.height/2 + Object1.height/2) {
        return true;
  }
  else {
    return false;
  }
  }
