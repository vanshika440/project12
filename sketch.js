var Path
var jake
var right_boundary,left_boundary


function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  jakeImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png",)

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage("path",pathImg)
  path.velocityY = 4
  path.scale=1.2
  
  jake=createSprite(200,350,20,20)
  jake.addAnimation("jake",jakeImg)

  left_boundary= createSprite(0,300,100,600)
  left_boundary.visible=false;

  right_boundary=createSprite(390,300,80,600)
  right_boundary.visible=false;

 
}

function draw() {
  background(0);
 
  if (path.y > 400){
    path.y = height/2}

    jake.x=World.mouseX

    jake.collide(left_boundary);
    jake.collide(right_boundary);

    Edges=createEdgeSprites()
    jake.collide(Edges)

  drawSprites()
}
