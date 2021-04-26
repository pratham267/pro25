

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,g,box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

 background(255,0,0);

    engine = Engine.create();
	world = engine.world;
 

    paper1=new paper(20,380,20);
	  g=new ground(400,height,800,20)
   // box1=new box(550,370,20,100);
    box2=new box(640,370);
   // box3=new box(730,370,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  g.display();
 // box1.display();
  box2.display();
  //box3.display();
  drawSprites();
  
    
  

}
function keyPressed() {
  if(keyCode === UP_ARROW){
   Matter.body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  }
}


