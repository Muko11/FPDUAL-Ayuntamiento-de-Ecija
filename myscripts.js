window.addEventListener("DOMContentLoaded", function(e) {
    mostrarSaludo();
    mostrarImagenAlcalde();
});


function mostrarSaludo() {
    let alcalde = {
        saludo: "¡Bienvenido a Écija!",
        nombre: "Mi nombre es David Javier García Ostos",
        edad: "Tengo " + 57 + " años",
        email: "Si desea contactar conmigo, este es mi correo: alcaldeEcija@gmail.com"
    }
    let nombreAlcalde = document.getElementById("nombreAlcalde");
    nombreAlcalde.innerText = alcalde.saludo + "\n" + alcalde.nombre + "\n" + alcalde.edad + "\n" + alcalde.email;
}

function mostrarImagenAlcalde() {
    let imagen = {
        foto: "https://elcorreoweb.es/binrepository/675x402/0c1/675d400/none/10703/QIRC/2017-08-02-alcalde-entrevista_20300079_20191115091608.jpg"
    }
    let imagenAlcalde = document.getElementById("imagenAlcalde");
    imagenAlcalde.setAttribute("src", imagen.foto);
}