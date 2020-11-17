var scoreTime=0;
var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  monkey = createSprite(100,350,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,384,800,10);
  ground.velocityX = -3;
  
  //obstacle.velocityX = -3;
  //banana.velocityX = -3;
}


function draw() {
background("white");
  
  scoreTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ scoreTime,10,20);
  
  if (ground.x < 300) {
      
    ground.x = 400;
    
  }
  
  if(keyDown("space")&& monkey.y >= 348) {
   monkey.velocityY = -12;
    
  }
  
  monkey.velocityY = monkey.velocityY +0.8;
  
  monkey.collide(ground);
  
  spawnObstacles();
  spawnbanana();
  drawSprites();
}

function spawnbanana() {
  if (frameCount % 230 === 0) {
    banana = createSprite(600,255,20,20);
   banana.addImage(bananaImage);
    banana.scale = 0.15;
    banana.velocityX = -3;
    banana.lifeTime = 200;
    
  //frame count
  bananaGroup.add(banana);
  }
}

function spawnObstacles() {
  if (frameCount % 240 === 0) {
    obstacle = createSprite(600,355,20,20);
   obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    obstacle.lifeTime = 200;
    
  obstacleGroup.add(obstacle);
  }
}

