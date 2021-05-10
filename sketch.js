const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;
var engine, world ;
var box , ground ,ball;
function setup() {
  createCanvas(800,400);
engine = Engine.create();
var option={isStatic:true};
var ball_option={restitution:1.2};

world = engine.world;
//creating box body
box = Bodies.rectangle(100,100,50,50,ball_option);
World.add(world , box);
console.log(box);
//creating ground body
ground=Bodies.rectangle(70,380,600,20,option);
World.add(world , ground);
//creating ball body
ball=Bodies.circle(100,50,20,ball_option);
World.add(world , ball);
}

function draw() {
  background(0);  
Engine.update(engine);

  rectMode(CENTER);
 rect(box.position.x,box.position.y,50,50);
 rect(ground.position.x,ground.position.y,600,20);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);

}