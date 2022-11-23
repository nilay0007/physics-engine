
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball,options
var ground,goptions
var rock,roptions
var wall,woptions
function setup()
{
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  //prop for ball
  options={
    restitution:0.95,
    frictionAir:0.01
  }
  //ball body
ball=Bodies.circle(100,10,20,options)
//add ball in world
World.add(world,ball)
//prop for ground
goptions={
  isStatic:true
}
//ground body
ground=Bodies.rectangle(200,390,400,20,goptions)
//add ground in world
World.add(world,ground)
//prop for rock
roptions={
  restitution:0.85
  
}
//rock body
rock=Bodies.circle(300,20,10,roptions)
//add rock in world
World.add(world,rock)
//prop for wall
woptions={
  isStatic:true
}
//wall body
wall=Bodies.rectangle(300,200,200,20,woptions)
//add wall in world
World.add(world,wall)

}
function draw() 
{
  background(51);
  Engine.update(engine)
 ellipse(ball.position.x,ball.position.y,20)
 rect(ground.position.x,ground.position.y,200,20)
 ellipse(rock.position.x,rock.position.y,20)
 rect(wall.position.x,wall.position.y,200,10)
}

