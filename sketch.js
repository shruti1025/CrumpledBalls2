var ground ,paperObject , backGround , dustbinS ,paperS;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  //backGround = loadImage("15n.jpg")
  D_anim= loadImage("dustbingreen.png")
  P_anim = loadImage("paper.png")
}

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

  paperS =createSprite(200,500,150,150);
  paperS.addImage("paperBall" , P_anim);
  paperS.dept= 2;
  paperS.scale= 0.37;

  dustbinS =createSprite(900,490,150,150);
  dustbinS.addImage("DUSTBIN" , D_anim);
  dustbinS.depth=-2;
  dustbinS.scale= 0.55;
  groundSprite=createSprite(600,590,1200,25);
  groundSprite.shapeColor=color(0)

  engine = Engine.create();
  world = engine.world;

	paperObject = new Paper(200,450,70)

    //Create a Ground
    ground = Bodies.rectangle(600, 588, 120000
	  , 20 ,{isStatic:true ,friction:1 } );
	  
    World.add(world, ground); 


	Engine.run(engine);

   box1 = new Trashcan(900,565,120,20);
    box2 = new Trashcan(840,510,20,150);
    box3 = new Trashcan(960,510,20,150);
    // dustbin1 = new dustbin(900,500,150,150);
  }


function draw() {
  //rectMode(CENTER);
  background("white");
paperS.x=paperObject.body.position.x;
paperS.y=paperObject.body.position.y;
  groundSprite.x= ground.position.x
  groundSprite.y=ground.position.y



  	box1.display();
    box2.display();
    box3.display();
    // dustbin1.display();
    paperObject.display();


  drawSprites();
}

function keyPressed() {
 if (keyCode === UP_ARROW) {

 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:115 , y:-115});

  }

  if (keyCode === DOWN_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-115,y:-110});
 }
 if (keyCode === RIGHT_ARROW) {

  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:100,y:0});
}
if (keyCode === LEFT_ARROW) {

  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-100,y:0});
}
}