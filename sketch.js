var movingRect,fixedrect;

function setup() {
  createCanvas(1200,800);
 fixedrect= createSprite(600, 200, 50, 80);
 fixedrect.shapeColor="blue"
 movingRect= createSprite(400, 200, 80, 30);
 movingRect.shapeColor="blue"
}

function draw() {
  background(0); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedrect.x<fixedrect.width/2+movingRect.width/2 && fixedrect.x-movingRect.x<fixedrect.width/2+movingRect.width/2 &&
    movingRect.y-fixedrect.y<fixedrect.height/2+movingRect.height/2 &&  fixedrect.y-movingRect.y<fixedrect.height/2+movingRect.height/2 )
    {
       fixedrect.shapeColor="red";
       movingRect.shapeColor="red";
  }   
    else{
      fixedrect.shapeColor="blue"
      movingRect.shapeColor="blue"
    }
  drawSprites();
}