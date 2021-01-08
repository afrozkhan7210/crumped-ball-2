
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,side0,side1,side2,dust;

function preload(){
	
}

function setup() {
	 createCanvas(800, 700);
  
	
	 engine = Engine.create();
	 world = engine.world;

	 paper = new Paper(100, 600, 10);

     ground = new Ground(400, 680, 800, 20);
  
	 side0 = new Dustbin(560, 585, 20, 170);
     side1 = new Dustbin(620, 660, 150, 20);
     side2 = new Dustbin(680, 585, 20, 170);
     dust = new Dustbin2(620,585,170,175)

     Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("red");

  Engine.update(engine);

  paper.display();

  ground.display();

  side0.display();
  side1.display();
  side2.display();
  dust.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:13, y: -17})
	}

  }


