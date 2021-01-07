
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(800,700,1600,20);
paper1 = new Paper(200,440,70,70);
dustbin1 = new Dustbin(1200,444,220,250);



  Engine.run(engine);
 
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

  dustbin1.display();
  paper1.display();
  ground.display();
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

	}
}



