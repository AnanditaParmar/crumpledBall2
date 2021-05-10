
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1;
var obj1;
var obj2;
var obj3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    paper=new Paper(130,500);
	ground=new Ground(600,690,1200,30);
	dustbin1=new Dustbin(900,600,20,100);
	obj1=new Obj(830,630,10,150);
	obj2=new Obj(900,670,150,10);
	obj3=new Obj(970,630,10,150);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine);
  paper.display();
  
  
  obj3.display();
  obj2.display();
  obj1.display();
  dustbin1.display();
  ground.display();
  drawSprites();
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:42,y:-42})
	}
}

