const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rb,lb,bb;
var helicopterIMG, helicopterSprite;
var packageSprite,packageIMG;
var packageBody,ground;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	rb=new Box(510,650,20,100);
	lb=new Box(290,650,20,100);
	bb=new Box(400,685,200,20);

	

	packageSprite=createSprite(width/2, 60, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.setCollider

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-5, width,5);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 10 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x = packageBody.position.x ;
  packageSprite.y = packageBody.position.y ;
  rb.Display();
  lb.Display();
  bb.Display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody,false);
  }
}



