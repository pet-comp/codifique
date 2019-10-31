var chapa1 = 0;
var chapa2 = 0;
var chapa3 = 0;
var chapa4 = 0;
var nulo = 0;
var branco = 0;
var entrada = 1;

for(;entrada != 0;) {
	entrada = parseFloat(prompt("Digite seu voto!"));
	if(entrada == 1) {
		chapa1 = chapa1 + 1;
	} else if(entrada == 2) {
		chapa2++;
	} else if(entrada == 3) {
		chapa3 = chapa3 + 1;
	} else if(entrada == 4) {
		chapa4++;
	} else if(entrada == 5) {
		nulo++;
	} else if(entrada == 6) {
		branco = branco + 1;
	}
}

document.write("Chapa 1: " + chapa1 + "<br>");
document.write("Chapa 2: " + chapa2 + "<br>");
document.write("Chapa 3: " + chapa3 + "<br>");
document.write("Chapa 4: " + chapa4 + "<br>");
document.write("Nulo: " + nulo + "<br>");
document.write("Brancos: " + branco + "<br>");



