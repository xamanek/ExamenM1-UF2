"use strict"

// .....EX 1 ......

function calcular(){
	var kilomtxt=document.getElementById("num1_eje01");
	var resultado=document.getElementById("resultado1");
	var operacion=0;
	
	var kilom=Number(kilomtxt.value);
	operacion=(kilom*1000);
	resultado.innerHTML=operacion+" metros";
}



// .....EX 2 ......
function trasforma(){
	var txt=document.getElementById("texto1");
	var resultado=document.getElementById("resultado2");
	var txtcampo=txt.innerHTML;
	resultado.innerHTML="<b>"+txtcampo.toUpperCase()+"</b>";
}

// .....EX 3 ......SOLUZIONE SEMPLICE
/*function cambiacolorred(){
	var cajitas=document.querySelectorAll("#semaforo .redondo");
	var luce=cajitas[0];
	luce.style.backgroundColor="red";
}

function cambiacolororange(){
	var cajitas=document.querySelectorAll("#semaforo .redondo");
	var luce=cajitas[1];
	luce.style.backgroundColor="orange";
}

function cambiacolorgreen(){
	var cajitas=document.querySelectorAll("#semaforo .redondo");
	var luce=cajitas[2];
	luce.style.backgroundColor="green";
}*/

// OTRAS SOLUCIONES COMPLICADAS

// VERSION 1

/*function cambiacolorred(){
	var cajitas=document.querySelectorAll("#semaforo .redondo");
	var luce1=cajitas[0];
	var luce2=cajitas[1];
	var luce3=cajitas[2];
	luce1.style.backgroundColor="red";
	luce2.style.backgroundColor="#ffe9a5";
	luce3.style.backgroundColor="#ffe9a5";
}
function cambiacolororange(){
	var cajitas=document.querySelectorAll("#semaforo .redondo");
	var luce1=cajitas[0];
	var luce2=cajitas[1];
	var luce3=cajitas[2];
	luce1.style.backgroundColor="#ffe9a5";
	luce2.style.backgroundColor="orange";
	luce3.style.backgroundColor="#ffe9a5";
}
function cambiacolorgreen(){
	var cajitas=document.querySelectorAll("#semaforo .redondo");
	var luce1=cajitas[0];
	var luce2=cajitas[1];
	var luce3=cajitas[2];
	luce1.style.backgroundColor="#ffe9a5";
	luce2.style.backgroundColor="#ffe9a5";
	luce3.style.backgroundColor="green";
}
*/

//VERSION 2


function cambiacolor(quale){
	var botones=document.querySelectorAll("#semaforo .bot");
	var rosso= document.getElementById("rojo");
	var arancio= document.getElementById("naranja");
	var verdissimo= document.getElementById("verde");
	
	if (quale=='#f44336'){
	rosso.style.backgroundColor=quale;
	}
	else if(quale=='#f18c28'){
	arancio.style.backgroundColor=quale;
	}
	
	else if (quale=='#54bd00'){
	verdissimo.style.backgroundColor=quale;
	}
}

/*function cambiacolor(micolor){
	/*var cajitas=document.querySelectorAll("#semaforo .redondo");
	var botones=document.querySelectorAll("#semaforo .bot");
	
	
	if (botones[0]){
	
	cajita[0].style.backgroundColor=micolor;
	}
	*/
	
/*	var cajitas=document.querySelectorAll("#semaforo .redondo");
	var botones=document.querySelectorAll("#semaforo .bot");
	
	if (cajitas==0){
	cajitas.style.backgroundColor=micolor;
	
	}
	
	
	
}
*/

