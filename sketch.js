
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,bin1,bin2,bin3,Youwin;

function preload()
{
	 
	//Youwin = loadSound("youwin.mp3"); // how do i add sound?
}

function setup() {
	createCanvas(1800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,650,50);
	ground = new Ground(900,700,1800,50);
	bin1 = new Dustbin(1400,600,20,150);
	bin2 = new Dustbin(1485,665,186,20);
	bin3 = new Dustbin(1570,600,20,150);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
	paper.display();
	ground.display(); 
	bin1.display(); 
	bin3.display();
	bin2.display();
	

  drawSprites();
 keyPressed(); 
}

function keyPressed () {

if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});


}


}


