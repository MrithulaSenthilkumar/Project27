
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(350,100,300,30);

	bob1 = new Bob(250,300);
	//bob2 = new Bob(300,300);
	//bob3 = new Bob(350,300);
	//bob4 = new Bob(400,300);
	//bob5 = new Bob(450,300);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  //bob2.display();
  // bob3.display();
  //bob4.display();
  //bob5.display();
  roof.display();
 
}



