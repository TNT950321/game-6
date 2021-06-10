
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango24,mango23,mango13,mango14,mango15,mango16,mango17,mango18,mango19,mango20,mango21,mango22;
var world,boy;

//Declare launcherObject and launchForce variable here
var launcherObject
var launchForce=100;
function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 
	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);
	mango13=new mango(1000,100,30);
  mango24=new mango(1100,130,30);
	mango23=new mango(1000,140,30);
	mango14=new mango(1100,70,30);
	mango15=new mango(1200,70,30);
	mango16=new mango(1100,230,30);
	mango17=new mango(920,230,40);
	mango18=new mango(1240,150,40);
	mango19=new mango(1200,230,40);
	mango20=new mango(1300,200,40);
	mango21=new mango(1220,50,40);
	mango22=new mango(900,100,10);
  
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  //create launcherObject here
  launcherObject=new launcher(stoneObj.body,{x:235,y:420})
	Engine.run(engine);
}

function draw() {

  background(230);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango24.display();
  mango23.display();
  mango13.display();
  mango14.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  mango20.display();
  mango21.display();
  mango22.display();
  stoneObj.display();
  groundObject.display();
  // display launcher object here



  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
  detectollision(stoneObj,mango24);
  detectollision(stoneObj,mango23);
  detectollision(stoneObj,mango13);
  detectollision(stoneObj,mango14);
  detectollision(stoneObj,mango15);
  detectollision(stoneObj,mango16);
  detectollision(stoneObj,mango17);
  detectollision(stoneObj,mango18);
  detectollision(stoneObj,mango19);
  detectollision(stoneObj,mango20);
  detectollision(stoneObj,mango21);
  detectollision(stoneObj,mango22);
}

//create mouseDragged function here

function mouseDragged() { 
  Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 

}
//create mouseReleased function here
function mouseReleased() { 
  launcherObject.fly();
 }

//create keyPressed function here
function keyPressed() { 
  if (keyCode === 32) { 
  Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
   launcherObject.attach(stoneObj.body);
  } 
}


  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
