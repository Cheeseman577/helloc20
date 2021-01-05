var movingRectangle
var fixedRectangle


function setup() {
  createCanvas(800,400);
 movingRectangle=createSprite(400, 200, 50, 50);
 fixedRectangle=createSprite(400,300,50,50);
}

function draw() {
  background(0,0,0);  
  movingRectangle.x=World.mouseX
  movingRectangle.shapeColor=("red")
  movingRectangle.y=World.mouseY
  fixedRectangle.shapeColor=("green")
  console.log(movingRectangle.x-fixedRectangle.x)
  console.log(movingRectangle.width/2 + fixedRectangle.width/2)
  if(movingRectangle.x-fixedRectangle.x<movingRectangle.width/2 + fixedRectangle.width/2
     && fixedRectangle.x-movingRectangle.x<movingRectangle.width/2 + fixedRectangle.width/2
     && movingRectangle.y-fixedRectangle.y<movingRectangle.height/2 + fixedRectangle.height/2
     && fixedRectangle.y-movingRectangle.y<movingRectangle.height/2+fixedRectangle.height/2){
    movingRectangle.shapeColor="lightgreen"
    fixedRectangle.shapeColor="black"
  }
  else {
    movingRectangle.shapeColor=("red")
    fixedRectangle.shapeColor=("green")
  }
  drawSprites();
}