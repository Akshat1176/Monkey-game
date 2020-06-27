//Global Variables
var player,player_running;
var ground,groundImage;
var backImage,background7

var bananaGroup,bananaImage;
var obstaclesGroup,obstacleImage;

var gameOver;
var score=0;

function preload(){
 backImage=loadImage("jungle.jpg"); 
  
 player_running=loadAnimation("monkey_01.png","monkey_02.png","monkey_03.png","monkey_04.png","monkey_05.png","monkey_06.png","monkey_07.png","monkey_08.png","monkey_09.png","monkey_10.png");
  
  bananaImage=loadImage("Banana.png");
  obstaclesImage=loadImage("stone.png");
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
  
}


function setup() {
  createCanvas(800,400);
  
  background7=createSprite(0,0,800,400);
  background7.addImage(backImage);
  background7.scale=1.5;
  background7.x=background7.width/2;
  background7.velocityX=-6;
  
  player=createSprite(10,340,80,50);
  player.addAnimation(player_running);
  player.scale=0.1;
  
  ground=createSprite(400,350,800,10);  
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  score=0;
}


function draw(){
 background(255);
  
 if (ground.x<0) {
    ground.x=ground.width/2;
 }
  
 if(background7.x<100) {
   background7.x=background7.width/2; 
}
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+1;
  }
  
  switch(score){
    case 10: player.scale=0.15;
             break;
    case 20: player.scale=0.20;
             break;
    case 30: player.scale=0.25;
             break;
    case 40: player.scale=0.30;
             break;
          default:break;
  }
  
  if (keyDown("space")) {
    player.velocityY=-10;
    }
  player.velocityY=player.velocityY+0.8;
  
  player.collide(ground);
  
  player.collide(obstaclesGroup);
  
  spawnbanana();
  
  spawnobstacle();
  
  if(obstaclesGroup.isTouching(player)){
     player.destroy();
     obstaclesGroup.destroyEach();
     bananaGroup.destroyEach();  
     background7.velocity=0;
    }
  text("score:"+score,510,40);
}

function spawnbanana (){
  if(frameCount % 80 === 0){
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
    banana.lifetime = 300;
    player.depth = banana.depth + 1;
     bananaGroup.add(banana); 
    
  }
  
  function spawnObstacles() {
  if(frameCount % 250 === 0) {
    var obstacle = createSprite(800,350,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacle_img);     
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
        player.depth = obstacle.depth + 1;
    obstaclesGroup.add(obstacle);
  }
  
}
}