
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;


function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;

    paper = new Paper(100,560,20);
	
	ground = new Ground(400,600,800,20);

	leftDustbin = new dustBin(550,540,20,100);
	bottomDustbin = new dustBin(610,580,100,20);
	rightDustbin = new dustBin(670,540,20,100);

	Engine.run(engine);

}


function draw() {
rectMode(CENTER);

background("white");

Engine.update(engine);

paper.display();
ground.display();
leftDustbin.display();
bottomDustbin.display();
rightDustbin.display();

}

function keyPressed(){

  if(keyCode === UP_ARROW){

  Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});

  }

}
