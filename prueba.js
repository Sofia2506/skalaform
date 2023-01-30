var cant = 0;
var pregunta = document.getElementsByClassName("paso");
console.log("weon");
console.log(pregunta);
function siguiente(){
    console.log("Siguiente");
    cant+=100;
    for(let i = 0 ; i<pregunta.length; i++){
        pregunta[i].style.transform="translateX(-"+cant+"%)";
    }
}
function anterior(){
    console.log("Anterior");
    cant-=100;
    for(let i = 0 ; i<pregunta.length; i++){
        pregunta[i].style.transform="translateX(-"+cant+"%)";
    }
}