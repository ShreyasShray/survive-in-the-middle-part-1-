var player;
var bullet;
var bullet, bulletGroup = [];
var enemy, enemyGroup;

function setup() {
  createCanvas(500,500);
  player = createSprite(250, 250, 16, 16);
  player.shapeColor = "blue";
  enemyGroup = new Group();
}

function draw() {
  background(255,255,255);  

  if(keyDown(LEFT_ARROW)){
    player.rotation = player.rotation - 4;
    player.rotateToDirection = true;
  }

  if(keyDown(RIGHT_ARROW)){
    player.rotation = player.rotation + 4;
    player.rotateToDirection = true;
  }

  if(keyDown("space") && bulletGroup.length <= 6){
    bullet = createSprite(250, 250, 5, 10);
    bullet.shapeColor = "red";
    bullet.setSpeedAndDirection(4, player.rotation - 90);
    bullet.rotation = player.rotation;
    bulletGroup.push(bullet);
  }

  if(frameCount % 200 === 0){
    var select = Math.round(random(1, 4));
    switch(select){
      case 1: enemy = createSprite(Math.round(random(0, 100)), Math.round(random(0, 200)), 18, 18);
      enemy.shapeColor = "yellow";
      enemy.setVelocity(2, 1.5);
      enemyGroup.add(enemy);
      break;
      case 2: enemy = createSprite(Math.round(random(0, 100)), Math.round(random(300, 500)), 18, 18);
      enemy.shapeColor = "yellow";
      enemy.setVelocity(2, -1.5);
      enemyGroup.add(enemy);
      break;
      case 3: enemy = createSprite(Math.round(random(400, 500)), Math.round(random(0, 200)), 18, 18);
      enemy.shapeColor = "yellow";
      enemy.setVelocity(-2, 1.5);
      enemyGroup.add(enemy);
      break;
      case 4: enemy = createSprite(Math.round(random(400, 500)), Math.round(random(300, 500)), 18, 18);
      enemy.shapeColor = "yellow";
      enemy.setVelocity(-2, -1.5)
      enemyGroup.add(enemy);
      break;
    }
  }

  for(var i = 0; i <= enemyGroup.length; i++){
    for(var i = 0; i <= bulletGroup.length; i++){
    if(enemyGroup.get(i) && bulletGroup[i]){
    if(enemyGroup.get(i).isTouching(bulletGroup[i])){
        enemyGroup.get(i).destroy();
        bulletGroup[i].destroy();
    }
   }
  }
}
  

  drawSprites();
}