let loaded = [];
let content;

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

    content = `
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
    `
    for(i = 0; i < x.length; i++){
        name = x[i].getElementsByTagName('nombre')[0].childNodes[0].nodeValue;
        photo = x[i].getElementsByTagName('foto')[0].childNodes[0].nodeValue;
        foot = x[i].getElementsByTagName('pie')[0].childNodes[0].nodeValue;

        content +=`
                    <div class="carousel-item active">
                        <h3>${name}</h3>
                        <img class="d-block w-100" src="${photo}" alt="First slide">
                        <p>${foot}</p>
                    </div>
        `
        //content += '<div class = "carousel-item active"><p>'+name+'</p><img class = "d-block w-100" src="'+photo+'"><p>'+foot+'</p></div>';
        element = [name, photo, foot];
        loaded.push(element);
    }
    content += `
                </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
    `
    document.getElementById('toInsert').innerHTML += content;
}

/**
 * <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">

            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
        </div>
 */