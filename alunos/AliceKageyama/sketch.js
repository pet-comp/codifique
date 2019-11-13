//------------------------pongo :)
var x=10;
var p1Y;
var p2Y;
var ballX;
var ballY;
var vel;
var eixox;
var eixoy;
var score1;
var score2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  p1Y=windowHeight/2;
  p2Y=windowHeight/2;
  ballX=windowWidth/2;
  ballY=windowHeight/3;
  vel=7;
  eixox=0;
  eixoy=0;
  score1 = 0;
  score2 = 0;
}

function draw() {
  background(0);
  fill(255);
  textSize(20);
  text(score1,50,50);
  text(score2,windowWidth-70,50)
  //------------------------pontilhado
  while(x <= windowHeight){
    rect(windowWidth/2-5, x, 10, 30);
    x+=40;
  }
  x=0;
  //------------------------tracinhos p1 e p2
  //p1
  if(keyIsDown(87)){
    p1Y -= 10;

  }if (keyIsDown(83)){
    p1Y += 10;
  }
  rect(20, p1Y, 20, 100);
  //p2
  if(keyIsDown(38)){
    p2Y -= 10;
  }if (keyIsDown(40)){
    p2Y += 10;
  }
  rect(windowWidth - 40, p2Y, 20, 100);
  //------------------------bolinha  ùwú
  if(ballX+25>=windowWidth){
    ballX=windowWidth/2;
    eixox = 0;
    eixoy = 0;
    score1 +=1;

  }if(ballX-25<=0){
    ballX=windowWidth/2;
    eixox = 0;
    eixoy = 0;
    score2 +=1;

  }

  if(eixoy == 0 && eixox == 0){
    if(keyIsDown(87)||keyIsDown(83)){
      eixox = 1;
      eixoy =1;
    }if(keyIsDown(38)||keyIsDown(40)){
      eixox = -1;
      eixoy = 1;
    }
  }
  if(ballY+25>=windowHeight||ballY-25<=0) eixoy = -eixoy;
  ballX+=vel*eixox;
  ballY+=vel*eixoy;
  ellipse(ballX, ballY, 50, 50);

  if(ballY+25<=p1Y+100 && ballY-25>=p1Y && ballX-25<=50){
    eixox=-eixox;
  }
  if(ballY+25<=p2Y+100 && ballY-25>=p2Y && ballX+25>=windowWidth-40){
    eixox=-eixox;
  }
}

