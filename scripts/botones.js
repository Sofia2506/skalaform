var cant = 0;
var pregunta = document.getElementsByClassName("form__seccion");
var antes = document.getElementById("anterior");
var next = document.getElementById("siguiente");
var enviar = document.getElementById("enviar");

var form = document.getElementById("form");

function avanzar(){
    for(let i = 0 ; i<pregunta.length; i++){
        pregunta[i].style.transform="translateX(-"+cant+"%)";
    }
    visibilidad();
    altura();
}
function siguiente(){
    cant+=100;
    avanzar();
    console.log(cant);
}
function anterior(){
    cant-=100;
    avanzar();
    console.log(cant);
}
function visibilidad(){
    if(cant == 300){
        next.style.visibility="hidden";
        enviar.style.visibility="visible";
    }
    else{
        next.style.visibility="visible"
        enviar.style.visibility="hidden";
    }
    if(cant == 0){
        antes.style.visibility="hidden";
    }
    else{
        antes.style.visibility="visible";
    }
}

function altura(){
    if(cant == 100 || cant == 200){
        form.style.height="500px"
    }
    else{
        form.style.height="800px";
    }
}
