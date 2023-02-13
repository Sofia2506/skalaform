var xhttp = new XMLHttpRequest();
var tipoPago = document.getElementById("pago");
var img = document.getElementById("pago-imagen");
let html="";

var filename = document.getElementById("file");
filename.addEventListener("change", function(){
    console.log(filename.value);
    img.style.display="none";
    html +=`<p>Gracias por subir ${filename.value}</p>`;
    document.getElementById("file-content").innerHTML = html;

});
/* xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(nom);
    }
}
xhttp.open("GET", "", true);
xhttp.send(); */

tipoPago.addEventListener("change", function() {
    if(tipoPago.value == "Yape"){
        console.log("Yape");
        img.src = "img/yape-skala.png";
    }
    else{
        console.log("Deposito");
        img.src = "img/deposito.png";
    }
});
