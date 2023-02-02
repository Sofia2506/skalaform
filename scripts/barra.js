console.log("Barra")
//efecto de hacer click y que deslice
    //botones
    var next = document.getElementById("siguiente");
    var prev = document.getElementById("anterior");

    var barra = document.getElementsByClassName("barra");
    var estado = document.getElementsByClassName("estado");
    var listo = document.getElementsByClassName("listo");
    var proceso = document.getElementsByClassName("proceso");
    var estado_img = document.getElementsByClassName("estado-img");
    var cont_click=0;
    proceso[0].style.display ="block";
    //Retroceder
    function retroceder(){
        cont_click-=1;
        console.log(cont_click)
        barra[cont_click].style.width = "0%";
        if(cont_click > 0){
            barra[cont_click-1].style.background="linear-gradient(90deg, rgba(0,109,119,1) 0%, rgba(10,158,167,1) 79%)";       
        }
        estado[cont_click+1].classList.remove("actual");
        estado[cont_click+1].classList.add("noPaso")
        estado[cont_click].classList.remove("paso");
        estado[cont_click].classList.add("actual");
        //color de los circulous
        listo[cont_click].style.display="none";   
        proceso[cont_click].style.display = "block"; 
        proceso[cont_click+1 ].style.display = "none";
        //img color  
        console.log(estado_img[cont_click]);
        estado_img[cont_click].classList.add("actual-img");
        estado_img[cont_click+1].classList.remove("actual-img");    
        estado_img[cont_click].classList.remove("paso-img");
    }
    //Cambiar a siguiente
    function proceder(){
        if(cont_click<3){
            barra[cont_click].style.width = "100%";
            if(cont_click>0){
                barra[cont_click-1].style.background="#006D77";            
            }
            cont_click+=1;

            estado[cont_click-1].classList.remove("actual");
            estado[cont_click].classList.add("actual");
            estado[cont_click-1].classList.add("paso");
            //color de los circulous
            listo[cont_click-1].style.display="block";   
            proceso[cont_click].style.display = "block";
            proceso[cont_click-1].style.display = "none"; 
            //img color  
            console.log(estado_img[cont_click]);
            estado_img[cont_click].classList.add("actual-img");
            estado_img[cont_click-1].classList.remove("actual-img");    
            estado_img[cont_click-1].classList.add("paso-img");
        }
    }
