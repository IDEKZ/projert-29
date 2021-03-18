const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;
var player;

var ball;
var img;

function preload(){
  img = loadImage("hexagon (1).png");

}

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
    world = engine.world;


  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);
  block6 = new Block(360,195,30,40);
  block7 = new Block(390,195,30,40);
  block8 = new Block(420,195,30,40);
  block9 = new Block(390,155,30,40);
  bolck10 = new Block(420,155,30,40);
  block11 = new Block(450,155,30,40);
  block12 = new Block(420,115,30,40);
  block13 = new Block(620,220,30,40);
  ground1 = new Ground(420,260,230,10);
  ground2 = new Ground(680,240,160,10);
  ground3 = new Ground(750, 600, 1500, 10)
  block14 = new Block(480,235,30,40);
  block15 = new Block(510,235,30,40);
  block16 = new Block(450,195,30,40);
  block17 = new Block(480,195,30,40);
  
  block18 = new Block(650,220,30,40);
  block19 = new Block(680,220,30,40);
  block20 = new Block(710,220,30,40);
  block21 = new Block(740,220,30,40);
  block22 = new Block(650,180,30,40);
  block23 = new Block(680,180,30,40);
  block24 = new Block(710,180,30,40);
  block25 = new Block(680,140,30,40);
 
  player = new Player(50,200,30,30);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  sling = new Chain(this.ball,{x:150, y:160});

}

function draw() {
  background("black");
  Engine.update(engine);

  fill("red")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightblue")
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("pink")
  bolck10.display();
  block11.display();
  block12.display();
  
  fill("pink")
  block13.display();

  fill("white")
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  
  fill("red")
  block19.display();
  block20.display();
  block21.display();
 
  fill("lightblue")
  block22.display();
  block23.display();
  block24.display();
   block25.display();

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  sling.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(player.body,{x:235, y:420})
		chain.attach(player.body);
	}
}