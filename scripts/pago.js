var xhttp = new XMLHttpRequest();
var tipoPago = document.getElementById("pago");
var img = document.getElementById("pago-imagen");
let html="";
/* xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(nom);
    }
}
xhttp.open("GET", "", true);
xhttp.send(); */

tipoPago.addEventListener("change", function() {
/*     html +=`<p>${tipoPago.value}</p>`;
    document.getElementById("barra").innerHTML = html; */
    if(tipoPago.value == "Yape"){
        console.log("Yape");
        img.src = "img/yape-skala.png";
    }
    else{
        console.log("Deposito");
        img.src = "img/deposito.png";
    }
});
