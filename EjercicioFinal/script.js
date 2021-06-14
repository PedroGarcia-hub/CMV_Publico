let content;
let loaded = [];
function readXML() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            loadElements(this);
        }
    };
    xhr.open("GET", "data.xml", true);
    xhr.send();
}

function loadElements(xml) {
    let name, photo, foot, details;
    let xmlDoc = xml.reponseXML;
    let element = [];

    var x = xmlDoc.getElementsByTagName("elemento");

    for (i = 0; i < x.length; i++) {
        name = x[i].getElementsByTagName('nombre')[0].childNodes[0].nodeValues;
        photo = x[i].getElementsByTagName('foto')[0].childNodes[0].nodeValues;
        foot = x[i].getElementsByTagName('pie')[0].childNodes[0].nodeValues;
        details = x[i].getElementsByTagName('detalle')[0].childNodes[0].nodeVales;

        content += `<div class="flip-box">
                        <div class="flip-box-inner">
                            <div class="flip-box-front>
                                <img src=${photo}>
                            </div>
                            <div class="flip-box-back>
                                <h2>${name}</h2></br>
                                <p>${foot}</p>
                            </div>
                        </div>
                    </div>`;

        element = [name, photo, foot, details];
        loaded.push(element);
    }

    document.getElementById('elementsZone').innerHTML = content;
}

function findElements() {
    let input = $('#name').val();
    for (i = 0; i < loaded.length; i++) {
        if (loaded[i][0] == input) {
            content += `<div class="flip-box">
                            <div class="flip-box-inner">
                                <div class="flip-box-front>
                                    <img src=${loaded[i][0]}>
                                </div>
                                <div class="flip-box-back>
                                    <h2>${loaded[i][1]}</h2></br>
                                    <p>${loaded[i][2]}</p>
                                </div>
                            </div>
                        </div>`
            document.getElementById('elementsZone').innerHTML = content;
            break;
        }else{
            $('#elementsZone').text('No se han encontrado ningún registro');
        }
    }
    $('#restart').show();
}