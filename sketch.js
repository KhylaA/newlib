
var movingRect, fixedRect
var gameObject1, gameObject2, gameObject3, gameObject4

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400,200,100,50)
  fixedRect.shapeColor = "red"

  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "red"

  gameObject1 = createSprite(50,50,50,50)
  gameObject1.shapeColor = "green"

  gameObject2 = createSprite(150,50,50,50)
  gameObject2.shapeColor ="green"

  gameObject3 = createSprite(250,50,50,50)
  gameObject3.shapeColor = "green"

  gameObject4 = createSprite(350,50,50,50)
  gameObject4.shapeColor = "green"
}

function draw() {
  background(0);  

  if(isTouching(movingRect,gameObject1) == true){
movingRect.shapeColor = "blue"
gameObject1.shapeColor = "blue"
  }

  else{
    movingRect.shapeColor = "red"
    gameObject1.shapeColor = "green"
  }

  movingRect.x = mouseX
  movingRect.y = mouseY

  drawSprites();
}

