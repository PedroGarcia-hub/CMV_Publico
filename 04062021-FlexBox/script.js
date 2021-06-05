loaded = [];
let content = "";

function readXML(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            loadContent(this);
        }
    };
    xhr.open("GET", "datos.xml", true);
    xhr.send();
}

function loadContent(xml){
    var name, photo, foot;
    var xmlDoc = xml.responseXML;
    var element = [];

    var x = xmlDoc.getElementsByTagName("elemento");

    for(i = 0; i < x.length; i++){
        name = x[i].getElementsByTagName('nombre')[0].childNodes[0].nodeValue;
        photo = x[i].getElementsByTagName('foto')[0].childNodes[0].nodeValue;
        foot = x[i].getElementsByTagName('pie')[0].childNodes[0].nodeValue;

        content += `<div class="flip-box">
                        <div class="flip-box-inner">
                        <div class="flip-box-front">
                            <img src=${photo}>
                        </div>
                        <div class="flip-box-back">
                            <h2>${name}</h2></br>
                            <p>${foot}</p>
                        </div>
                        </div>
                    </div>
        `;

        element = [name, photo, foot];
        loaded.push(element);
    }

    document.getElementById('main').innerHTML = content;
}