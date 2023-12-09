//Declaração de Variaveis Globais
//Elementos HTML
var iconAnimation = document.querySelector("#menu-hamburguer");
var coluna_prim = document.querySelector(".coluna1-prim");
var coluna_secon = document.querySelector(".coluna1-secon");
var tela = document.querySelector("body").clientWidth;
var elem = null;
var elemAux = null;
var audio = null;
//Array
var rotacao = ["fa-rotate-90", "fa-rotate-180", "fa-rotate-270", "fa-rotate-360"];
var musica = ["#musica1", "#musica2", "#musica3", "#musica4"];
//Numerico
var nCont = 180;
var click = 0;
var gravaDisc = 0;

//Função que faz animação do Hambuguer Menu
function animaMenu(){

	if(click == 0){//
		if(nCont >= 0){
			iconAnimation.style.transform = "rotate(" + nCont.toString() + "deg)";
			setTimeout(function(){
				nCont--;
				animaMenu();
			}, 1);
		}
		else{
			click = 1;
			return null;
		}
	}		
	else{
		if(nCont <= 180){
			iconAnimation.style.transform = "rotate(" + nCont.toString() + "deg)";
			setTimeout(function(){
				nCont++;
				animaMenu();
			}, 1)			
		}
		else{
			click = 0;
			nCont = 180;
			return null;
		}
	}
}

function mostraCd(disco){
	aux = disco + 2
	elem = document.querySelector("#disco" + disco.toString());
	elemAux = document.querySelector("#img" + disco.toString());
	audio = document.querySelector(musica[disco-1])

	audio.play();
	elem.style.animation = "surgi 1s";
	if(tela >= 578){
		elem.style.marginLeft = "240px";
	}else
	{
		elem.style.marginLeft = "120px";
	}
}

function saiu(disco){
	elem = document.querySelector("#disco" + disco.toString());

	audio.pause()
	elem.style.animation = "saida 1s";
	elem.style.marginLeft = "0px";
}

function mostramais(nlinha){
	var linha = document.querySelector("#linha" + nlinha.toString());
	var linhaAux = null

	if(nlinha == 2){
		linhaAux = document.querySelector("#linha" + (nlinha -1).toString())
	}
	else{
		linhaAux = document.querySelector("#linha" + (nlinha +1).toString())
	}

	linhaAux.style.display = "none"
	linha.style.display = "block"
}

function ativatela(){

	if(gravaDisc == 0){
		coluna_prim.className = "coluna1-secon float-left w-50 h-100 d-none ";
		coluna_secon.className = "float-left coluna1-prim w-50 h-100 d-none d-block"
		gravaDisc++
	}else{
		gravaDisc = 0
		coluna_secon.className = "float-left coluna1-prim w-50 h-100 d-none"

		if(tela >= 720){
			coluna_prim.className = "float-left coluna1-prim h-100 d-md-block";	
		}	
	}
}