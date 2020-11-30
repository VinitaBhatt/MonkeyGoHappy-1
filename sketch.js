
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var survivalTime;


function preload(){
  
  monkey_running =                                  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  monkey = createSprite(50,260,20,20);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.15;
  
  ground = createSprite(300,290,1200,20);
  ground.velocityX = -4;
  
  bananaGroup = new Group;
  obstacleGroup = new Group;
  
  survivalTime =0;
}


function draw() {
  background("lightblue");
  
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time : " + survivalTime, 200,30);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y>232){
    monkey.velocityY= -10;   
  }
  
  monkey.velocityY = monkey.velocityY +0.4;
    
  spawnBananas();
  spawnObstacles();
  drawSprites();
  
}

function spawnBananas(){
  if(frameCount % 80 ===0){
    banana = createSprite(600,50,10,10);
    banana.addImage(bananaImage);
    banana.scale=0.10;
    banana.velocityX=-4;
    var randomNumber = Math.round(random(60,160));
    banana.y = randomNumber;
    banana.lifetime = 150;
    bananaGroup.add(banana);
  }
  
}

function spawnObstacles(){
  if(frameCount % 300 ===0){
    obstacle = createSprite(600,260,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.20;
    obstacle.velocityX=-4;
    obstacle.lifetime = 150;
    obstacleGroup.add(obstacle);
  }
}

