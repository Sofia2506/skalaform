var cant = 0;
var pregunta = document.getElementsByClassName("form__seccion");
var prev = document.getElementById("anterior");
var next = document.getElementById("siguiente");
var enviar = document.getElementById("enviar");
var section = 0;


//Fin de cosas de la barra
function avanzar(){
    for(let i = 0 ; i<pregunta.length; i++){
        pregunta[i].style.transform="translateX(-"+cant+"%)";
        if( i != section){
            pregunta[i].style.height  = "500px";
        }
        else {
            pregunta[i].style.height = "auto";
        }
    }
    visibilidad();
}
function siguiente(){
    console.log(section);
    if(section == 0){
        let image = document.getElementById("file").value;
        var nombreBoleta = document.getElementById("nombreBoleta").value;
        //is value esta vacio entones reviso lo manda a su casa y luego peude llenar el form otar vez.
     /*    var documentoBoleta = document.getElementById("documentoBoleta").value;
        if(image == ""){
            alert("Ingesa una imagen de su comprobante");
        }
        else if(nombreBoleta ==""){
            alert("Inrgese el nombre para su boleta");
        }
        else if(documentoBoleta == ""){
            alert("Ingrese el número de documento de su boleta");
        }
        else{ */
            cant+=100;
            siguienteBarra(); 
            avanzar(); 
        /* } */
    }
    else if(section ==1){
        var apellidoEstudiante = document.getElementById("apellidoEstudiante").value;
        var nombreEstudiante = document.getElementById("nombreEstudiante").value;
        var nacimientoEstudiante = document.getElementById("nacimientoEstudiante").value;
        var celularEstudiante = document.getElementById("celularEstudiante").value;
        var documentoEstudiante = document.getElementById("documentoEstudiante").value;
/*         if(nombreEstudiante == ""){
            alert("Ingrese el nombre del estudiante");
        }
        else if(apellidoEstudiante == ""){
            alert("Ingrese el apellido del estudiante");
        }
        else if (nacimientoEstudiante == ""){
            alert("Ingrese la fecha de nacimiento del estudiante");
        }
        else if(celularEstudiante == ""){
            alert("Ingrese el número de celular del estudiante");
        }
        else if(documentoEstudiante == ""){
            alert("Ingrese el número de documento del estudiante");
        }
        else{ */
            cant+=100;
            siguienteBarra(); 
            avanzar(); 
        /* } */
    }
    else if(section == 2){
        var lugarNacimientoEstudiante = document.getElementById("lugarNacimientoEstudiante").value;
        var direccionEstudiante = document.getElementById("direccionEstudiante").value;
        var correoEstudiante = document.getElementById("correoEstudiante").value;
/* 
        if(lugarNacimientoEstudiante == ""){
            alert("Ingrese el lugar de nacimiento del estudiante");
        }
        else if(direccionEstudiante ==""){
            alert("Ingrese la direccion del estudiante");
        }
        else if(correoEstudiante == ""){
            alert("Ingrese el corero del estudiante");
        }
        else{ */
            cant+=100;
            siguienteBarra(); 
            avanzar(); 
      /*   } */
    }
}
        //Verificación final del boton submit 
/* var buttonSubmit = document.getElementById('enviar');
buttonSubmit.addEventListener('click',function(){
    var fechaInicio = document.getElementById("fechaInicio").value;
    //Academicos
    var institucion = document.getElementById("institucion").value;
    var nombreRepresentante   = document.getElementById("nombreRepresentante").value;  
    var apellidoRepresentante = document.getElementById("apellidoRepresentante").value;

    if(fechaInicio == ""){
        alert("Ingrese la fecha cuando iniciara sus clases");
        buttonSubmit.disabled = true;
    }
    else if(institucion == ""){
        alert("Ingrese la institución de procedencia");
    }
    else if(nombreRepresentante == ""){
        alert("Ingrese el nombre del apoderado");
    }
    else if(apellidoRepresentante == ""){
        alert("Ingrese el apellido del apoderado");
    }   
    buttonSubmitl.disabled = false; 
})*/

function anterior(){
    anteriorBarra();
    cant-=100;
    avanzar();
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
        prev.style.visibility="hidden";
    }
    else{
        prev.style.visibility="visible";
    }
}

//Cosas de la barra
//efecto de hacer click y que deslice
    //botones
    var barra = document.getElementsByClassName("barra");
    var estado = document.getElementsByClassName("estado");
    var listo = document.getElementsByClassName("listo");
    var proceso = document.getElementsByClassName("proceso");
    var estado_img = document.getElementsByClassName("estado-img");
    proceso[0].style.display ="block";
    //Retroceder
    function anteriorBarra(){
        section-=1;
        barra[section].style.width = "0%";
        if(section > 0){
            barra[section-1].style.background="linear-gradient(90deg, rgba(0,109,119,1) 0%, rgba(10,158,167,1) 79%)";       
        }
        estado[section+1].classList.remove("actual");
        estado[section+1].classList.add("noPaso")
        estado[section].classList.remove("paso");
        estado[section].classList.add("actual");
        //color de los circulous
        listo[section].style.display="none";   
        proceso[section].style.display = "block"; 
        proceso[section+1 ].style.display = "none";
        //img color  
        console.log(estado_img[section]);
        estado_img[section].classList.add("actual-img");
        estado_img[section+1].classList.remove("actual-img");    
        estado_img[section].classList.remove("paso-img");
    }
    //Cambiar a siguiente
    function siguienteBarra(){
        if(section<4){
            barra[section].style.width = "100%";
            if(section>0){
                barra[section-1].style.background="#006D77";            
            }
            section+=1;

            estado[section-1].classList.remove("actual");
            estado[section].classList.add("actual");
            estado[section-1].classList.add("paso");
            //color de los circulous
            listo[section-1].style.display="block";   
            proceso[section].style.display = "block";
            proceso[section-1].style.display = "none"; 
            //img color  
            estado_img[section].classList.add("actual-img");
            estado_img[section-1].classList.remove("actual-img");    
            estado_img[section-1].classList.add("paso-img");
        }
    }
