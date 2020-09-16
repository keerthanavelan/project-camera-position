var backgroundScene,monkey,ObstacleGroup,BananaGroup,score,monkeyImage,bananaImage,obstacleImage,invisibleGround,obstacleImage;
function preload(){
  backgroundImage=loadImage("jungle2.jpg");
   monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

obstacleImage =loadImage("stone.png");
bananaImage = loadImage("Banana.png");




}

function setup() {
  createCanvas(800,400);
  //Background
  backgroundScene=createSprite(400,200,800,400);
  backgroundScene.addImage("background",backgroundImage);
  monkey = createSprite(100,350,20,20);
 monkey.addAnimation("monkey",monkeyImage);
monkey.scale=0.1;
backgroundScene.velocityX=-4;
 backgroundScene.x = backgroundScene.width/2;
score = 0;
obstacleGroup = createGroup();
bananaGroup = createGroup();
invisibleGround = createSprite(400,390,800,20)
invisibleGround.visible = false;



}

function draw() {
    background(0);
    if (backgroundScene.x < 295){
      backgroundScene.x = backgroundScene.width/2;
    }
switch(score){
  case 10 : monkey.scale = 0.12   
    break;
    case 20 : monkey.scale = 0.14   
    break; 
    case 30 : monkey.scale = 0.16
    break;
    case 40 : monkey.scale = 0.18
    break;
    default : break;
    
    
    
    
}
 if (monkey.isTouching(obstacleGroup)){
  score = 0;
   monkey.scale = 0.1;
   
   
   
   
   
 }
  
  
  
  
  
if(keyDown("space") &&(monkey.collide(invisibleGround))){
monkey.velocityY=-13;
}
monkey.velocityY =monkey.velocityY + 0.8   ; 
 monkey.collide(invisibleGround);
  if(monkey.isTouching(bananaGroup)){
     
   score = score + 2;
    bananaGroup.destroyEach();
}
  
   
  
  spawnBananas();
  spawnObstacles();
  drawSprites();
   stroke("white");
  textSize(20);
  fill("white")
text("Score:  " + score,500,50);
  
}
function spawnObstacles() {
  if(World.frameCount % 80 === 0) {
    var obstacle = createSprite(800,365,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
//obstacle.debug=true;
    obstacle.addImage("stone",obstacleImage);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 150;
    obstacleGroup.add(obstacle);
    //add each obstacle to the group
   obstacle.setCollider("circle",0,0,10);
  //obstacle.debug = true;
  }
}
function spawnBananas() {
  if(World.frameCount % 80=== 0) {
    var banana= createSprite(800,280,10,40);
   banana.velocityX = -6;
    
    //generate random obstacles
//obstacle.debug=true;
   banana.addImage("Banana",bananaImage);
    
    //assign scale and lifetime to the obstacle           
   banana.scale = 0.05;
   banana.lifetime = 150;

    //add each obstacle to the group
   banana.setCollider("circle",0,0,10);
 bananaGroup.add(banana);
  }
}