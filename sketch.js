var angle = 0 ;
function preload(){
  //sun img 
  //earth
  sunImag= loadImage("sun.png")
  eImag= loadImage("earth.png")
}
function setup() {
  createCanvas(1200,1200); 
  sun = createSprite(0, 0, 50, 50);
  sun.addImage("sun",sunImag);
  sun.scale=0.5
  sun.debug = true;
  earth = createSprite(400, 200, 50, 50);
  console.log(sun.radius);
  sun.setCollider("circle",0,0,200);
  earth.addImage("earth",eImag);
  earth.scale=0.1
}

function draw() {

  background(255,255,255);  
  angleMode(DEGREES);
  translate(width/2,height/2);
  rotate(angle);
  angle = angle+0.2;
  if (frameCount%  1 === 0){
sun.scale = sun.scale+0.001;
  }
  if (earth.isTouching(sun)){
  earth.destroy();
  }
  drawSprites();
}