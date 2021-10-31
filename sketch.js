const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,ground,ground1,ground2,base;
var particle = [];
var plinko = [];
var division = [];
var divisionh = 300;

function setup(){
  createCanvas(480,800);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(240,1190,480,800);

  ground1 = createSprite(0,400,15,800)
  ground1.shapeColor = "red";

  ground2 = createSprite(480,400,15,800)
  ground2.shapeColor = "red";
  

  for(var i=15;i<=width;i=i+90){
    division.push(new Division(i,height-divisionh/2,5,divisionh));
  }

  for(var j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,75));
  }

  for(var j=15;j<=width-10;j=j+50){
    plinko.push(new Plinko(j,175));
  }

  for(var j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,275));
  }

  for(var j=15;j<=width-10;j=j+50){
    plinko.push(new Plinko(j,375));
  }

  base = createSprite(240,795,480,10)
  base.shapeColor = "white";

}

function draw(){
  background(0,0,0); 
  Engine.update(engine);
  
  ground.display();
  base.display();

  for(var j=0;j<plinko.length;j++){
    plinko[j].display();
  }

  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  for(var k=0;k<particle.length;k++){
    particle[k].display();
  }

  for(var i=0;i<division.length;i++){
    division[i].display();
  }

  drawSprites();
}