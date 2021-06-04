let loaded = [];
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
    
    for(i = 0; i <x.length; i++){
        name = x[i].getElementsByTagName('nombre')[0].childNodes[0].nodeValue;
        photo = x[i].getElementsByTagName('foto')[0].childNodes[0].nodeValue;
        foot = x[i].getElementsByTagName('pie')[0].childNodes[0].nodeValue;

        content +='<div class="carousel-item active"> '+
                        '<h3>'+name+'</h3>'+
                        '<img class="d-block w-100" src="'+photo+'" alt="First slide">'+
                        '<p>'+foot+'</p>'+
                    '</div>'

        
        
        element = [name, photo, foot];
        loaded.push(element);
    }
    content += `
        </div>

    `
    document.getElementById('items').innerHTML = content;
}


