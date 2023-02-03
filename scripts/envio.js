//Envio a google sheet

let urlScriptSheet = "https://script.google.com/macros/s/AKfycbxItl5PVwJruFbAy-boxtEt5C0ZqIbELkYBJDnGBX0DdjKpPHqvwfboxiTjng90yWbe/exec";
    


//Envio hacia whatsapp
function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.getElementById('form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '924417100';

formulario.addEventListener('submit', async (event) => {
    //Datos de boleta
    var image = document.getElementById("image").vale;
    var nombreBoleta = document.getElementById("nombreBoleta").value;
    var TipoDocumentoBoleta = document.getElementById("TipoDocumentoBoleta").value;
    var documentoBoleta = document.getElementById("documentoBoleta").value;
    //Datos personales
    var apellidoEstudiante = document.getElementById("apellidoEstudiante").value;
    var nombreEstudiante = document.getElementById("nombreEstudiante").value;
    var nacimientoEstudiante = document.getElementById("nacimientoEstudiante").value;
    var celularEstudiante = document.getElementById("celularEstudiante").value;
    var tipoDocumentoEstudiante = document.getElementById("tipoDocumentoEstudiante").value;
    var documentoEstudiante = document.getElementById("documentoEstudiante").value;
    //Datos de ubicación
    var lugarNacimientoEstudiante = document.getElementById("lugarNacimientoEstudiante").value;
    var direccionEstudiante = document.getElementById("direccionEstudiante").value;
    var correoEstudiante = document.getElementById("correoEstudiante").value;
    //Plan
    var modalidad = document.getElementById("modalidad").value;
    var nivel = document.getElementById("nivel").value;
    var horario = document.getElementById("horario").value;
    var fechaInicio = document.getElementById("fechaInicio").value;
    //Desactivación del boton enviar porque ya envio y que actualice la página
    event.preventDefault()
    buttonSubmit.disabled = true
    //Envio de datos sin imagen a google sheet
    try{
        await fetch('https://sheet.best/api/sheets/ccbce7ee-c532-4a77-8a92-233ea4dc8671',{
            method : 'POST',
            mode : 'cors',
            headers : {
                'Content-Type' : 'application/json'
            },
            //al poner un objeto js, y esta cosa lo transforma a JSON   
            body : JSON.stringify({
                "Nombre" : nombre,
               //Datos de boleta
               "NombreBoleta" : nombreBoleta,
               "TipoDocumentoBoleta" : TipoDocumentoBoleta,
               "documentoBoleta" : documentoBoleta,
    //Datos personales
                "ApellidoEstudiante" : apellidoEstudiante,
                "NombreEstudiante" : nombreEstudiante,
                "NacimientoEstudiante" : nacimientoEstudiante,
                "CelularEstudiante" : celularEstudiante,
                "TipoDocumentoEstudiante" : tipoDocumentoEstudiante,
                "DocumentoEstudiante" : documentoEstudiante,
    //Datos de ubicación
                "LugarNacimientoEstudiante" : lugarNacimientoEstudiante,
                "DireccionEstudiante" : lugarNacimientoEstudiante,
                "CorreoEstudiante" : correoEstudiante,
    //Plan
                "Modalidad" : modalidad,
                "Nivel" : nivel,
                "Horario" : horario,
                "FechaInicio" : fechaInicio,
            })  
        });
    }
    catch(error){
            console.log(error);
    }

    //Envio a googleSheet
    let image = document.getElementById("image");
    let fr = new FileReader();
    fr.addEventListener('loadend',()=>{
        let res = fr.result;
        let spt = res.split("base64,")[1];
        let obj = {
            base64:spt,
            type:image.files[0].type,
            name:image.files[0].name
        }
        fetch(urlScriptSheet,{
            method:"POST",
            body:JSON.stringify(obj)
        })
        .then(r=>r.text())
        //envio a whatsapp
        .then(data =>{
            console.log(data)
            setTimeout(() => {
                var image = data;    
                var  mensaje = 'send?phone=' + telefono + '&text=*Nombres* : ' + nombreBoleta + '%0A*Pago link :* '+image;
                if(isMobile()) {
                    window.open(urlMobile + mensaje, '_blank')
                }else{
                    window.open(urlDesktop + mensaje, '_blank')
                }
                buttonSubmit.disabled = false
            }, 1000);
        })  
    })
    fr.readAsDataURL(image.files[0])
    //Fin del envio a google sheet
 
}); 
