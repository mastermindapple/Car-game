var player;
var opponents = [];
var lives = 5;
function setup(){
    frameRate(30);
    createCanvas(400,400);
    player = new Cars(0);
}
function draw(){
    background(0);
    stroke(255);
    for(var i=0; i<3; i++){
        for(var j=0; j<5; j++){
            line(i*133,80*j,i*133, (j*80)+20);
        }
    }
    player.refresh();
    if(frameCount % 30 == 0){
        var opponent = new Cars(1);
        opponents.push(opponent);
    }
    for(var i=0; i<opponents.length; i++){
        opponents[i].refresh();
    }
    displayLives();
    checkCollision();
    removeExtra();
    checkEnd();
}
function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        player.lane--;
        if(player.lane <= 0){
            player.lane = 3;
        }
      } 
      else if (keyCode === RIGHT_ARROW) {
        player.lane++;
        if(player.lane >= 4){
            player.lane = 1;
        }
      }
}
function checkCollision(){
    rectMode(CENTER);
        for(var i=0; i<opponents.length; i++){
            if(opponents[i].x == player.x && opponents[i].y == player.y){
                console.log("chalgya");
                lives--;
            }
        }
}
function removeExtra(){
    for(var i=0; i<opponents.length; i++){
        if(opponents[i].y > 435){
            opponents.splice(i,1)
        }
    }
}
function displayLives(){
    text(lives,30,50)
}
function checkEnd(){
    if(lives == 0){
        fill("red");
        text("Game Over!!",200,200);
        displayLives();
        noLoop();
    }
}