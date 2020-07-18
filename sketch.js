const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var pig1,pig2;
var bird;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,750,50,50);
    pig1=new Pig(900,750);
    box2 = new Box(1000,750,50,50);
    ground = new Ground(600,height,1200,20)
    bird=new Bird(100,100);
    box3 = new Box(800,700,50,50)
    pig2 = new Pig(900,700);
    box4 = new Box(1000,700,50,50)
    box5 = new Box(900,630,50,50)
    log1=new Log(900,700,350,PI/2);
    log2=new Log(900,650,350,PI/2);
    log3=new Log(860,630,120,PI/7);
    log4=new Log(940,630,120,-PI/7);
}

function draw(){
    background(255);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}