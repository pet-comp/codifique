//variavel para movimentar as plataformas
var px = 50;
var py = 0;
var dx = 550;
var dy = 0;

//variavel para movimentar a bola
var x = 0;
var y = 0;
var d = 'direita'
var d2 = 'baixo'
var v = 5;
var v2 = 8;

//variavel para contador
var p1 = 0;
var p2 = 0;


function setup() {
  createCanvas(600,400);
  background(0);
}

function draw() {
  background(0);
  //comando das plataformas
  fill(0,0,255);
  rect(px,py,20,100);
  fill(0,0,255);
  rect(dx,dy,20,100);
  fill(0,0,255);
  ellipse(x,y,20,20);
  
  if (keyIsDown(87) && py - 7 >= 0 && py - 7 <= 400 - 100) {
	  py = py - 7;
  }
  if (keyIsDown(83) && py + 7 >= 0 && py + 7 <= 400 - 100) {
	  py = py + 7;
  }
  
  if (keyIsDown(38) && dy - 7 >= 0 && dy - 7 <= 400 - 100) {
	  dy = dy - 7;
  }
  if (keyIsDown(40) && dy + 7 >= 0 && dy + 7 <= 400 - 100) {
	  dy = dy + 7;
  }
  
  //comando da bola
  if( x > 600){
	  d = 'esquerda';
	  p1++;
  } else if (x < 0) {
	  d = 'direita';
	  p2++;
  }
 
  
  if(y > 400){
	d2 = 'cima';
  } else if(y < 0){
	d2 = 'baixo';
  }
  
  //colisao das plataformas
  if( x - 5 >= px && x - 5 <= px+20 && y - 5 >= py && y - 5 <= py+100){
	  d = 'direita';
  } else if( x - 5 >= dx && x - 5 <= dx+20 && y - 5 >= dy && y - 5 <= dy+100){
	  d = 'esquerda';
  }
  
  //comndo da bola p2
  if(d2 == 'cima'){
	  y = y - 1*v2;
  } else {
	  y = y + 1*v2;
  }
  
  if(d == 'direita') {
	  x = x + 1*v;
	  
  } else {
	  x = x - 1*v;
  }
  
	 
	 textSize(30);
	 text(""+p1,300-30*2,30);
	 
	 textSize(30);
	 text(""+p2,300+30*2,30);
}