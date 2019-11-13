var speed;
  var speedBolaX;
  var speedBolaY;
  var barra1y;
  var barra2y;
  var x, y;
  var scoreA;
  var scoreB;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  speed = 20;
  speedBolaX = 10;
  speedBolaY = 10;
  barra1y = 3;
  barra2y = 3;
  x = windowWidth/2;
  y = windowHeight/2;
  scoreA = 0;
  scoreB = 0;
}

function draw() {
  background(0);
  textSize(50);
  text(scoreB, 50, 50);
  text(scoreA, windowWidth-50, 50);
  fill(255);
  stroke(255);
  //divisão
  rect(windowWidth/2-5 , 0, 10 , windowHeight);
  fill(0,0,255);
  stroke(0,0,255);
  //Barra da esquerda
  rect(20,barra1y,10,100);
  //87 = W(indo para cima)
  if (keyIsDown(87)){
  barra1y = barra1y - speed;
  fill(0,0,255);
  stroke(0,0,255);
  rect(20,barra1y,10,100);  
  }
  //S = 83(indo para baixo)
  if (keyIsDown(83)){
  barra1y = barra1y + speed;
  fill(0,0,255);
  stroke(0,0,255);
  rect(20,barra1y,10,100); 
  }
  fill(255,0,0);
  stroke(255,0,0);
  //Barra da direita
  rect(windowWidth-30,barra2y,10,100);
  //I = 73(indo para cima)
  if (keyIsDown(73)){
  barra2y = barra2y - speed;
  fill(255,0,0);
  stroke(255,0,0);
  rect(windowWidth-30,barra2y,10,100);
  }
  //K = 75(indo para baixo)
  if (keyIsDown(75)){
  barra2y = barra2y + speed;
  fill(255,0,0);
  stroke(255,0,0);
  rect(windowWidth-30,barra2y,10,100);
  }
  if (barra1y <= 0) {
    barra1y = 1;
  }
  if (barra1y >= windowHeight-100) {
    barra1y = windowHeight - 101;
  }
  if (barra2y <= 0) {
    barra2y = 1;
  }
  if (barra2y >= windowHeight-100) {
    barra2y = windowHeight - 101;
  }
  fill(0,255,0);
  stroke(0,255,0);
  ellipse(x, y, 20);
  x = x + speedBolaX;
  y = y + speedBolaY;  
  if(y >= windowHeight || y <= 0) {
    speedBolaY = -speedBolaY;
  }
  if(x >= windowWidth || x <= 0) {
    speedBolaX = -speedBolaX;
  }
  if(x >= windowWidth) {
    x = windowWidth/2;
    y = windowHeight/2;
    scoreB++;
  }
  if(x <= 0) {
    x = windowWidth/2;
    y = windowHeight/2;
    scoreA++;
  }
  if(y >= barra1y && y <= barra1y+100 && x <= 30) {
    speedBolaY = -speedBolaY;
    speedBolaX = -speedBolaX;
  }
  if(y >= barra2y && y <= barra2y+100 && x >= windowWidth-30) {
    speedBolaY = -speedBolaY;
    speedBolaX = -speedBolaX;
  }
}