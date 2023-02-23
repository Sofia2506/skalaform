const { jsPDF } = window.jspdf;
var imgData = document.getElementById("listo");
function generarPDF(){
    const pdf = new jsPDF();
    console.log("Se creo el pdf");
    pdf.text(10, 10, 'Hola HDTPTM!');
    pdf.text(10, 10, 'Esta es tu pinche constancia no la pierdas');
    doc.addImage(imgData, 'JPEG', 15, 40, 180, 160)
    pdf.save('babasa.pdf');
}
