const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint
var engine, world;
function setup(){
    var canvas = createCanvas(windowWidth/2,windowHeight/2);
    engine = Engine.create();
    world = engine.world;
    b1=new Bob(100,200)
}

function draw(){
background(0);
Engine.update(engine);
    b1.display()
}