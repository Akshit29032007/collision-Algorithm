var movingRect,fixedrect;

var object1,object2;


function setup() {
  createCanvas(1200,800);
 fixedrect= createSprite(400, 100, 50, 80);
 fixedrect.shapeColor="blue"
 movingRect= createSprite(400, 800, 80, 30);
 movingRect.shapeColor="blue"
 movingRect.velocityY=-2;
 fixedrect.velocityY=+5;
}

function draw() {
  background(0); 
  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  
   Bounceoff(movingRect,fixedrect);
   
 
  drawSprites();
 }
  


 