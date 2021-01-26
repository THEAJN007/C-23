var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var side1,side,side3;
var side1body,side2body,side3body;
var packageBody,ground	
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	 
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	side1 = createSprite(300,height-90,20,100);
	side1.shapeColor = color(255,0,0);
	side2 = createSprite(400,height-50,200,20);
	side2.shapeColor = color(255,0,0);
	side3 = createSprite(500,height-90,20,100);
	side3.shapeColor = color(255,0,0);
	
	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution : 0,isStatic:true});
	World.add(world, packageBody);
	
	side1body = Bodies.rectangle(300,height-90,20,100 , {isStatic:true});
	World.add(world, side1body);
	side2body = Bodies.rectangle( 400,height-50,200,20, {isStatic:true});
    World.add(world, side2body);
	side3body = Bodies.rectangle(500,height-90,20,100, {isStatic:true});
    World.add(world, side3body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  side1.x= side1body.position.x 
  side2.y= side1body.position.y 

  side2.x= side2body.position.x 
  side2.y= side2body.position.y 

  side3.x= side3body.position.x 
  side3.y= side3body.position.y 

  packageSprite.collide(side1);
  packageSprite.collide(side2);
  packageSprite.collide(side3);  



  dropPackage();
  

  drawSprites();
 
}

function dropPackage() {
 if (keyDown(DOWN_ARROW)) {
    Matter.Body.setStatic(packageBody,false);
  }
}


