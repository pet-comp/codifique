var retangulo_esquerdo = 0;
var retangulo_direito = 0;
var texto1 = 0;
var texto2 = 0;
var posicao_y = 0 ;
var posicao_x = 81 ;
var velocidade_x = 8 ;
var velocidade_y = 5;
var velocidade_barra = 8;

function setup() {
 createCanvas(windowWidth,windowHeight);
 background(0);
}

function draw() {
	background(0)
	for(var i = 0; i <windowHeight; i=i+50) {
		fill(255)
		rect(windowWidth/2,i,20,20)
	}
	fill(255)
	ellipse(posicao_x,posicao_y,50,50)
	
	fill(255)
	textSize(60)
	text("Pontuaçao jogador 1 = " + texto2 , 60, 100)

	posicao_x = posicao_x + velocidade_x; 

	if(posicao_x <0) {
		velocidade_x = -velocidade_x
		texto1++;
	}
	
	fill(255)
	textSize(60)
	text("Pontuaçao jogador 2 = " + texto1 , 1000, 100)
	
	if(posicao_x >windowWidth){
		velocidade_x = -velocidade_x
		texto2++;
	}	
	posicao_y = posicao_y + velocidade_y
	
	if(posicao_y <0){
		velocidade_y = -velocidade_y
		
	}
	if(posicao_y >windowHeight){
		velocidade_y = -velocidade_y;		
	}
	

	fill(255)
	rect(5,retangulo_direito,25,150)
	
	fill(255, 0,0 )
	rect(windowWidth-30,retangulo_esquerdo,25,150)
	
	if(keyIsDown(38) && retangulo_esquerdo > 0) {
			retangulo_esquerdo -= velocidade_barra ;
		
	}	else if (keyIsDown(40) && retangulo_esquerdo+150 < windowHeight ) {
			retangulo_esquerdo += velocidade_barra ;
	}
	
	if(keyIsDown(87) && retangulo_direito > 0) {
			retangulo_direito -= velocidade_barra ;
		
	}	else if (keyIsDown(83) && retangulo_direito+150 < windowHeight ) {
			retangulo_direito += velocidade_barra ;
	}
	
	//colisão
	if((posicao_x-25 <= 30 && (posicao_y > retangulo_direito && posicao_y < retangulo_direito + 150))){
		velocidade_x = -velocidade_x;
		posicao_x = 81;
	}	
	
	if(posicao_x+25 >= windowWidth - 30 && posicao_y+25 >= retangulo_esquerdo && posicao_y-25 <= (retangulo_esquerdo + 150)){
		velocidade_x = -velocidade_x;
		posicao_x = windowWidth - 50;
		
	}


}