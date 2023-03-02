const { jsPDF } = window.jspdf;
function generarPDF(){
    const pdf = new jsPDF();
    console.log("Se creo el pdf");
    pdf.text(10, 10, 'Hola HDTPTM!');
<<<<<<< HEAD
    pdf.text(10, 30, 'Esta es tu pinche constancia no la pierdas');
=======
    pdf.text(10, 10, 'Esta es tu pinche constancia no la pierdas');
>>>>>>> e388ec7944dea5b6591ce733932e077504ab2aa7
    pdf.save('babasa.pdf');
}
