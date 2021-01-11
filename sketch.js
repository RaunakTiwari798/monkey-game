var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  
}



function setup() {
  monkey=createSprite(80,325,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale= 0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocity.x = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;

  
}


function draw() {
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  background(225);
  
  if(ground.x<0){
    ground.x  = ground.width/2;
  }
   ground.velocityX = -5;
  
  if(keyDown("space") && monkey.y>=139 ){
    monkey.velocityY = -12;
  }
  
  score=Math.round(frameCount/3)
  surrvivalTime = 
  
  monkey.velocityY = monkey.velocityY +0.8;
  
  monkey.collide(ground);   
    spawnFood();
    spawnObstacles();
 
  drawSprites();{
    stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);}
  
if(obstacleGroup.isTouching(monkey)){
 ground.velocityX = 0;
 monkey.velocityY = 0;
obstacleGroup.setVelocityXEach(0);
FoodGroup.setVelocityXEach(0);
 obstacleGroup.setLifetimeEach(-1);
FoodGroup.setLifetimeEach(-1);
}
}
    
    
  






function spawnFood() {
if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
  banana.lifetime = 200;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
   FoodGroup.add(banana);
  banana.setCollider("rectangle",0,0,400,400);
  }
  
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
     obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
     obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}




              
      






