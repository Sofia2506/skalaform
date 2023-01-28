var xhttp = new XMLHttpRequest();
var nom = document.getElementById("pago").value;
var activities = document.getElementById("pago")
let html="";
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(nom);
        html +=`<p>${nom}</p>`;
        document.getElementById("barra").innerHTML = html;
    }
}
xhttp.open("GET", "", true);
xhttp.send();

activities.addEventListener("click", function() {
    var options = activities.querySelectorAll("option");
    var count = options.length;
    if(typeof(count) === "undefined" || count < 2)
    {
        addActivityItem();
    }
});

activities.addEventListener("change", function() {
    if(activities.value == "addNew")
    {
        addActivityItem();
    }
});
