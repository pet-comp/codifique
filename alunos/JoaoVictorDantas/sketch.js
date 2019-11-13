let y1 = 0 , y2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  y1=windowHeight/2-50;
  y2=windowHeight/2-50;
}

function draw() {
  fill(255);
  stroke(255);
  background(0);
  rect(25, y1, 15, 100);
  rect(windowWidth-40 , y2 , 15 , 100);
  for(let i = 0 ; i < (windowHeight) ; i+=40){
    rect((windowWidth/2), i , 10 , 10);
  }
  if(keyIsDown(83)){
    y1+=5;
  }
  if(keyIsDown(DOWN_ARROW)){
    y2+=5;
  }
  if(keyIsDown(87)){
    y1-=5;
  }
  if(keyIsDown(UP_ARROW)){
    y2-=5;
  }
  if(y1<=0){
    y1=0;
  }
  if(y2<=0){
    y2=0;
  }
  if(y1>=windowHeight-50){
    y1=windowHeight-50;
  }
  if(y2>=windowHeight-50){
    y2=windowHeight-50;
  }
}