  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;
var box3;
var ground2;
var ground3;


function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(200,300,50,50);
    box2 = new box(240,100,50,100);

    box3 = new box(200, 10, 40, 50);

    ground = new Ground(200,400,400,20);

    ground2 = new Ground(200, 200, 100, 10);

    ground3 = new Ground(100, 100, 200, 10);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();

    box3.display();
    ground.display();

    ground2.display();

    ground3.display();
   
}