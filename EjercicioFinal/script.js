let content = "";
let loaded = [];


/**
 *funcion para conectar con el XML 
 */
function readXML() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            loadElements(this);
        }
    };
    xhr.open("GET", "datos.xml", true);
    xhr.send();
}

/**
 * Funcion para leer los elementos del XML y mostralos en el html
 * @param {*} xml XML a leer
 */
function loadElements(xml) {
    var name, photo, foot, details;
    var xmlDoc = xml.responseXML;
    var element = [];
    content = "";

    var x = xmlDoc.getElementsByTagName("elemento");

    for (i = 0; i < x.length; i++) {
        name = x[i].getElementsByTagName('nombre')[0].childNodes[0].nodeValue;
        photo = x[i].getElementsByTagName('foto')[0].childNodes[0].nodeValue;
        foot = x[i].getElementsByTagName('pie')[0].childNodes[0].nodeValue;
        details = x[i].getElementsByTagName('detalle')[0].childNodes[0].nodeValue;

        content += `<div class="flip-box">
                        <div class="flip-box-inner">
                        <div class="flip-box-front">
                            <img src="${photo}" alt="${name}">
                        </div>
                        <div class="flip-box-back">
                            <h2>${name}</h2></br>
                            <h4>${foot}</h4>
                            <p class="details">${details}</p>
                        </div>
                        </div>
                    </div>
        `;

        element = [name, photo, foot, details];
        loaded.push(element);
    }

    document.getElementById('elementsZone').innerHTML = content;
    $("#restart").hide();
}

/**
 * Funcion para buscar elementos por nombre y mostrarlos en el html
 */
function findElements() {
    let input = $('#txtName').val();
    content = "";
    for (i = 0; i < loaded.length; i++) {
        if (loaded[i][2] == input) {
            content += `<div class="flip-box">
                            <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <img src="${loaded[i][1]}" alt="${loaded[i][0]}">
                                </div>
                                <div class="flip-box-back">
                                    <h2>${loaded[i][0]}</h2></br>
                                    <h4>${loaded[i][2]}</h4>
                                    <p class="details">${loaded[i][3]}</p>
                                </div>
                            </div>
                        </div>`
        } else {
            $('#elementsZone').text('No se han encontrado ningún registro');
        }
        document.getElementById('elementsZone').innerHTML = content;
    }
    $('#restart').show();
}

/**
 * Funcion para controlar el menu horizontal de forma responsive
 */
function horizontalMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/**
 * Funcion para cambiar el body a dark mode
 */
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}