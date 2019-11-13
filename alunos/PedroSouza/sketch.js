function setup() {
  // put setup code here
    createCanvas(windowWidth,windowHeight)
	pma = windowHeight/2
	pmb = windowHeight/2
  by= windowHeight/2
  bx = windowWidth/2
px = 0
  py = 0
  vely = 5
  velx = 5
}

function draw() {
  // put drawing code here
    background('black')
	fill(255);
	stroke(255);
  textSize(30)
  text(px,40,40)
  text(py,windowWidth - 40,windowHeight - 40)
	i=0
	while(i<=windowHeight){
		rect(windowWidth/2 -5, i, 10, 10)
		i+=20
	}
	fill(0,0,255)
	stroke(0,0,255)
	rect(20,pma,10,50)
	fill(255,0,0)
	stroke(255,0,0)
	rect(windowWidth-30,pmb,10,50);
	fill(0,255,0)
	stroke(0,255,0)
	ellipse(bx,by,20)
	
		if(keyIsDown(38)){
			pmb = pmb- 8}
  if(keyIsDown(40)){
			pmb = pmb+ 8}
	
  if(keyIsDown(87)){
			pma = pma- 8}

	
  if(keyIsDown(83)){
			pma = pma+ 8}
	
	

if(by - 20< 0 || by + 20>= windowHeight){
  vely = -vely

}
 by = by + vely 
  bx = bx + velx 
  if(bx < 0){
    py++
    bx = windowWidth/2
    by = windowHeight/2
  }
   if(bx > windowWidth){
    px++
    bx = windowWidth/2
    by = windowHeight/2
  }
  
  if(bx + 20 >= windowWidth-30 && by + 20 >= pmb && by-20 <= pmb+50){ 
    velx= - velx
    vely = random(-1,1) * random(5,10)
  
  }
   if(bx - 20 <= 20 && by + 20 >= pma && by-20 <= pma+50){ 
    print("oi")
    velx= - velx
    vely = random(5,10)
  
  }
      }
      
