//Declaração de Variaveis Globais
//Elementos HTML
var iconAnimation = document.querySelector("#menu-hamburguer")
//Array
var rotacao = ["fa-rotate-90", "fa-rotate-180", "fa-rotate-270", "fa-rotate-360"];
//Numerico
var nCont = 180;
var click = 0

//Função que faz animação do Hambuguer Menu
function animaMenu(){
	/*
		Estados:
		Click = 0 / Menu Fechado
		Click = 1 / Menu Aberto
	*/

	if(click == 0){//
		if(nCont >= 0){
			iconAnimation.style.transform = "rotate(" + nCont.toString() + "deg)"
			setTimeout(function(){
				nCont--
				animaMenu()
			}, 1)
		}
		else{
			click = 1
			return null
		}
	}		
	else{
		if(nCont <= 180){
			iconAnimation.style.transform = "rotate(" + nCont.toString() + "deg)"
			setTimeout(function(){
				nCont++
				animaMenu()
			}, 1)			
		}
		else{
			click = 0
			nCont = 180;
			return null
		}
	}
}

