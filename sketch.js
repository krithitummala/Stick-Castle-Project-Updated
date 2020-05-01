const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var triangle1,triangle2,triangle3;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(550,320,80,140);
    box2 = new Box(607,360,50,170);
    box3 = new Box(485,280,50,170);
    box4 = new Box(448,230,50,220);
    box5 = new Box(640,340,50,220);
    ground = new Ground(600,height,1200,20);
    

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    triangle1= triangle(506,250,542,155,578,250);
    triangle2 = triangle(385, 169, 407, 110, 439, 169);
    triangle3 = triangle(632, 169, 654, 110, 686, 169);
    drawSprites();
}