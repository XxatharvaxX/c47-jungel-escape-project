var bgImg;
var pc, maxImg;
var platform, platformImg;
var gorilla, gorillaImg;
var plant, plantImg;
var apple,banana, berry, appleImg, bananaImg, berryImg;
var bottle, bottleImg;
var ground;
var obstacleGroup;
var energyGroup;
var platformGroup;
var invisibleGround;
var score;

function preload()
{
  bgImg = loadImage("./Assets/Jungle.jpg");
  platformImg = loadImage("./Assets/platformBg.png");
  gorillaImg = loadImage("./Assets/gorillaBg.png");
  plantImg = loadImage("./Assets/plantbg.png");
  appleImg = loadImage("./Assets/appleBg.png");
  bananaImg = loadImage("./Assets/bananabg.png");
  berryImg = loadImage("./Assets/berrybg.png");
  bottleImg = loadImage("./Assets/waterBg.png");
  maxImg = loadImage("./Assets/Maxbg.png");
}

function setup() {
  createCanvas(800,400);
  
  pc = createSprite(200,300);
  pc.addImage(maxImg);
  pc.scale = 0.3;

  /*plant = createSprite(400,300);
  plant.addImage(plantImg);
  plant.scale = 0.13;

  gorilla = createSprite(700,300);
  gorilla.addImage(gorillaImg);
  gorilla.scale = 0.3;*/

  ground = createSprite(800,380,800,60);
  ground.x = ground.width/2;
  ground.velocityX = -(6+3*score/100);

  invisibleGround = createSprite(400,390,800,30);
  invisibleGround.visible = false;

  obstacleGroup = createGroup();
  energyGroup = createGroup();
  platformGroup = createGroup();

}

function draw() {
  background(bgImg);  
  drawSprites();

  if(ground.x < 0)
  {
    ground.x = ground.width/2;
  }

  spawnPlantsGorilla();
  spawnFruit();
  spawnPlatforms();
  spawnDrink();

  score = score + Math.round(frameCount/60);

  textSize(20);
  fill("white");
  text("Score: "+score,50,50);
}

function spawnPlantsGorilla()
{
 if(frameCount % 90===0)
 {
   var obstacle = createSprite(800,300);
   obstacle.velocityX = -(6+3*score/100);

   var randomNum = Math.round(random(1,2));

   switch(randomNum)
   {
     case 1:obstacle.addImage(plantImg);
     obstacle.scale = 0.3;
     break;
     case 2:obstacle.addImage(gorillaImg);
     obstacle.scale = 0.5;
     break;
     default: break;
   }
   obstacle.lifetime = 800;
   obstacleGroup.add(obstacle);
 }
}

function spawnFruit()
{
  if(frameCount % 103===0)
 {
   var energy = createSprite(800,350);
   energy.velocityX = -(6+3*score/100);

   var randomNum = Math.round(random(1,3));

   switch(randomNum)
   {
     case 1:energy.addImage(appleImg);
     energy.scale = 0.1;
     break;
     case 2:energy.addImage(berryImg);
     energy.scale = 0.2;
     break;
     case 3:energy.addImage(bananaImg);
     energy.scale = 0.1;
     break;
     default: break;
   }
   energy.lifetime = 800;
   energyGroup.add(energy);
 }

}

function spawnDrink()
{
  if(frameCount % 180===0)
 {
   var bottle = createSprite(800,350);
   bottle.velocityX = -(6+3*score/100);
   bottle.addImage(bottleImg);
   bottle.scale = 0.2;

   
   bottle.lifetime = 800;
   energyGroup.add(bottle);
 }

}

function spawnPlatforms() {
  
  if (frameCount % 150 === 0) {
     platform = createSprite(900,350,40,10);
    platform.y = Math.round(random(100,150));
    platform.addImage(platformImg);
    platform.scale = 0.5;
    platform.velocityX = -3;
    
    platform.lifetime = 800    
   platformGroup.add(platform);
    }
}