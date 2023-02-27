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
var buttonSubmit = document.getElementById('enviar');
//selectores para el loader
var loader = document.getElementById("carga");
var cargaEfecto = document.getElementById("carga__efecto")
var logo = document.getElementById("img__carga");
var texto__carga = document.getElementById("texto__carga");
var opciones_form = document.getElementById("opciones__form");
//hasta aquí noma

formulario.addEventListener('submit', async (event) => {
    loader.style.display = "flex";
    console.log("se presiono el boton enviar")
    confirm == true ;
    //Recolección de datos
    //Datos de boleta
        let image = document.getElementById("file");
        var nombreBoleta = document.getElementById("nombreBoleta").value;
        //is value esta vacio entones reviso lo manda a su casa y luego peude llenar el form otar vez.
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
        //Academicos
        var institucion = document.getElementById("institucion").value;
        var nombreRepresentante   = document.getElementById("nombreRepresentante").value;  
        var apellidoRepresentante = document.getElementById("apellidoRepresentante").value; 
        
        //Desactivación del boton enviar porque ya envio y que actualice la página
        event.preventDefault()
        buttonSubmit.disabled = true
        //Envio de imagen 
    //Si paso las validaciones de los datos puede ejecutar todo esto
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
        //actualización de datos
        .then(data =>{
            console.log("Se logro enviar" + data);
            setTimeout(() => {
                opciones_form.style.display = "flex";
                texto__carga.innerHTML = "Gracias por registrarte, puedes descargar tu comprobante de matricula pero recuerda que es solo referencial,cuando tu matricula sea verificada, se te enviara el comprobante a tu correo electronico y número de celular gracias😉";
                cargaEfecto.style.display = "none"
                buttonSubmit.disabled = false
            }, 1000);
        })  
    })
    fr.readAsDataURL(image.files[0])
    
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
            //Datos de boleta
            "NombreBoleta" : nombreBoleta,
            "TipoDocumentoBoleta" : TipoDocumentoBoleta,
            "DocumentoBoleta" : documentoBoleta,
            //Datos personales
            "ApellidoEstudiante" : apellidoEstudiante,
            "NombreEstudiante" : nombreEstudiante,
            "NacimientoEstudiante" : nacimientoEstudiante,
            "CelularEstudiante" : celularEstudiante,
            "TipoDocumentoEstudiante" : tipoDocumentoEstudiante,
            "DocumentoEstudiante" : documentoEstudiante,
            //Datos de ubicación
            "LugarNacimientoEstudiante" : lugarNacimientoEstudiante,
            "DireccionEstudiante" : direccionEstudiante,
            "CorreoEstudiante" : correoEstudiante,
            //Plan
            "Modalidad" : modalidad,
            "Nivel" : nivel,
            "Horario" : horario,
            "FechaInicio" : fechaInicio,
            //Datos academicos
            "Institucion" : institucion,
            //Datos del apoderado
            "NombreRepresentante" : nombreRepresentante,
            "ApellidoRepresentante" : apellidoRepresentante,
        })  
    });
    console.log("Terminoo de enviar todooo")
    }
    catch(error){
    console.log(error);

//Fin del envio a google sheet

    }        
}); 
