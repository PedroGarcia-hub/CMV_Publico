let registrados = [];
let tabla;
function leerXML(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            cargarArray(this);
        }
    };
    //xhr.open("GET", "https://github.com/PedroGarcia-hub/CMV_Publico/blob/main/03062021-XML/datos.xml",true);
    xhr.open("GET", 'datos.xml', true);
    xhr.send();
}

function cargarArray(xml){
    var nombre, foto, pie, detalle;
    var xmlDoc = xml.responseXML;
    var elemento = [];

    var x = xmlDoc.getElementsByTagName("elemento");

    tabla = '<table><tr><th>NOMBRE</th><th>FOTO</th><th>AUTOR</th><th>DETALLE</th></tr>';
    for(i = 0; i < x.length; i++){
        nombre = x[i].getElementsByTagName('nombre')[0].childNodes[0].nodeValue;
        foto = x[i].getElementsByTagName('foto')[0].childNodes[0].nodeValue;
        pie = x[i].getElementsByTagName('pie')[0].childNodes[0].nodeValue;
        detalle = x[i].getElementsByTagName('detalle')[0].childNodes[0].nodeValue;
        
        tabla += "<tr><td>" + nombre + "</td><td><img src=" + foto + "></td><td>" + pie + "</td><td>" + detalle + "</td></tr>";
        elemento = [nombre, foto, pie, detalle];
        registrados.push(elemento);
    }
    tabla += '</table>';
    document.getElementById('mostrar').innerHTML = tabla;
    $("#restart").hide();
}

function buscarElemento(){
    let input = $("#nombre").val();
    let tabla = "<table><tr><th>NOMBRE</th><th>FOTO</th><th>AUTOR</th><th>DETALLE</th></tr>";
    for(i = 0; i < registrados.length; i++){
        if(registrados[i][0] == input){
            tabla += "<tr><td>" + registrados[i][0] + "</td><td><img src=" + registrados[i][1] + "></td><td>" + registrados[i][2] + "</td><td>" + registrados[i][3] + "</td></tr>";
            tabla += '</table>';
            document.getElementById("mostrar").innerHTML = tabla;
            break;
        }else{
            $("#mostrar").text("No se ha encontrado nigún registro");
        }
    }
    $("#restart").show();
    
}
