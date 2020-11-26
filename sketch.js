
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine,myworld;
var cp,ground;
var dbl,dbr,dbb;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

    myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.
	cp=new Paper(100,100,15);
	ground=new Ground(600,380,1200,20);
	dbl=new Ground(900,320,20,100);
	dbr=new Ground(1100,320,20,100);
	dbb=new Ground(1000,360,200,20)




	Engine.run(myengine);
  
}


function draw() {
  
  background(0);
  
  fill("purple")
  cp.display();

  fill("yellow")
  ground.display();

  fill("white")
 dbl.display();
 dbr.display();
 noStroke();
 dbb.display();

 if(keyDown("UP_ARROW")){

  Body.applyForce(cp.body, cp.body.position, {x:29,y:-9});

 }
}



