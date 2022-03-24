window.addEventListener("DOMContentLoaded", function(e) {
    mostrarFecha();
});

function mostrarFecha() {
    let fecha = new Date();
    let footer = document.getElementById("footer");
    footer.innerText = "Excmo. Ayuntamiento de Écija\n" + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
}