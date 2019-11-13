//----------------------VAR|NAMES
var p1 = prompt("Enter your nickname. (Player 1)");
var p2 = prompt("Enter your nickname. (Player 2)");
var a = 0;
//-----------------------VAR|MOVEMENT
var moveX = 0;
var moveY = 10;
var x = 10;
var yg = 0;
var yr = 0;
//-----------------------VAR|MOVE BALL
var xball = 0
var yball = 0
var spdX = 7
var spdY = 3.5
var dirX = 1
var dirY = 1
//-----------------------VAR|SCORE
var scoreg = 0
var scorer = 0



//-----------------------SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");

  yg = windowHeight/2;
  yr = windowHeight/2;

  xball = windowWidth/2;
  yball = windowHeight/2;

}



//-------------------------DRAW
function draw(){
  background(0);
  stroke(255);


  //------------------------FUNDO
  //traço
  fill(255);
  for(a = 0; a <= windowHeight; a += 50){
    rect(windowWidth/2 - 5, a, 10, 15);
    rect(windowWidth/2 - 5, a + 30, 10, 5 )
  }
  //limites
  rect(0, 0, windowWidth, 43);
  rect(0, windowHeight, windowWidth, -43);



   //------------------------TEXTO
  //name green
  textSize(40);
  fill(0, 155, 0);
  stroke(255);
  textStyle(BOLD);
  text("Name: " + p1, 50, 35)

  //name red
  textSize(40);
  fill(155, 0, 0);
  stroke(255);
  textStyle(BOLD);
  text("Name: " + p2, windowWidth/2, 35) 

  //score green
  textSize(40);
  fill(0, 155, 0);
  stroke(255);
  textStyle(BOLD);
  text("Score: " + scoreg, 50, windowHeight)

  //score red
  textSize(40);
  fill(155, 0, 0);
  stroke(255);
  textStyle(BOLD);
  text("Score: " + scorer, windowWidth/2, windowHeight)



  //-------------------------RAQUETES
  //green
  fill(0, 255, 0);
  rect(50, yg, 10, 100);

  //movement
  if(keyIsDown(83) && (yg + 150) <= windowHeight){
    yg += moveY
  }
  if(keyIsDown(87) && (yg - 50) >= 0){
    yg -= moveY
  }

  //red
  fill(255, 0, 0);
  rect(windowWidth - 50, yr, 10, 100);

  //movement
  if(keyIsDown(40) && (yr + 150) <= windowHeight){
    yr += moveY
  }
  if(keyIsDown(38) && (yr - 50) >= 0){
    yr -= moveY
  }



  //------------------------BOLA  
  fill(0);
  ellipse(xball, yball, 40, 40);

  //speeds
  xball += spdX * dirX
  yball += spdY * dirY



  //------------------------BOUNCE
  //walls
  if(xball >= windowWidth){
    dirX *= -1
    scoreg++
    xball = windowWidth/2
    yball = windowHeight/2
    spdX = 7
  }
  if(xball <= 0){
    dirX *= -1
    scorer++
    xball = windowWidth/2
    yball = windowHeight/2
    spdX = 7
  }
  if(yball >= windowHeight - 60 || yball <= 60){
    dirY *= -1
  }

  //raquete vermelha
  if(yball + 20 >= yr && yball - 20 <= yr + 100){
    if(xball + 40 >= windowWidth - 40){
      dirX *= -1
      spdX++
    }
  } 

  //raquete verde
  if(yball + 20 >= yg && yball - 20 <= yg + 100){
    if(xball -40 <= 40){
      dirX *= -1
      spdX++
    }
  }
}