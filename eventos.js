window.addEventListener("DOMContentLoaded", function(e) {
    mostrarEventos();
});

function mostrarEventos() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            console.log(myObj);
            pintarEventos(myObj);
        }
    };
    xmlhttp.open("GET", "eventos.json", true);
    xmlhttp.send();
}


function pintarEventos(eventos) {
    let tablaEventos = document.getElementById("tablaEventos");
    tablaEventos.innerHTML = "";
    eventos.forEach(evento => {
        tablaEventos.innerHTML += `
        <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td id="1">1</td>
                    <td id="2">${evento.dia} ${evento.hora} ${evento.nombre}</td>
                    <td id="3">3</td>
                    <td id="4">4</td>
                </tr>
                <tr>
                    <td id="5">5</td>
                    <td id="6">6</td>
                    <td id="7">7</td>
                    <td id="8">8</td>
                    <td id="9">9</td>
                    <td id="10">10</td>
                    <td id="11">11</td>
                </tr>
                <tr>
                    <td id="12">12</td>
                    <td id="13">13</td>
                    <td id="14">14</td>
                    <td id="15">15</td>
                    <td id="16">16</td>
                    <td id="17">17</td>
                    <td id="18">18</td>
                </tr>
                <tr>
                    <td id="19">19</td>
                    <td id="20">20</td>
                    <td id="21">21</td>
                    <td id="22">22</td>
                    <td id="23">23</td>
                    <td id="24">24</td>
                    <td id="25">25</td>
                </tr>
                <tr>
                    <td id="26">26</td>
                    <td id="27">27</td>
                    <td id="28">28</td>
                    <td id="29">29</td>
                    <td id="30">30</td>
                    <td></td>
                    <td></td>
                </tr>
        `

        console.log(evento.nombre);
    });
}