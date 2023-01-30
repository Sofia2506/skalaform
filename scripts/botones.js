var cant = 0;
var pregunta = document.getElementsByClassName("paso");
var antes = document.getElementById("anterior");
var next = document.getElementById("siguiente");
var enviar = document.getElementById("enviar");
function avanzar(){
    for(let i = 0 ; i<pregunta.length; i++){
        pregunta[i].style.transform="translateX(-"+cant+"%)";
    }
    visibilidad();
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