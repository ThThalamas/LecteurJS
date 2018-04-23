var url  = "http://radiofrance-podcast.net/podcast09/rss_15644.xml";


var origin = 'https://crossorigin.me/'; // On passe par un CORS
var buttonURL = document.getElementById("ajouter");
var inputURL = document.getElementById("url");



buttonURL.addEventListener("click",ajax);



async function ajax()
{
    let result;
    // On teste si l'URL n'est pas vide sinon une alerte apparaît
    if(inputURL.value.trim().length == 0)
    {
        alert("L'URL entrée est invalide !");
        return;
    }

    let url = origin + inputURL.value;
    
    try {
         result = await fetch(url, //On créé l'entête du CORS avec la méthode fetch()
        {
            headers:{
                'content-type': 'text/xml',
            },
            method : 'GET',

        });
    } catch(e) {

        alert("L'URL ne semble pas exister ou est éronnée");
        return;
    }
   

    if(result.ok)
    {
        parser = new DOMParser(); // On analyse la requête XML ou HTTP à l'aide du parser
        let resultText = await result.text();

        xmlDoc = parser.parseFromString(resultText,"text/xml");


        traiterXML(xmlDoc);   // la requête est traitée     
    }
    else
    {        
        alert("Il semblerait qu'il y est une erreur... Status : " +result.status);
    }
}


function traiterXML(xml)
{
    var channel = xml.getElementsByTagName("channel")[0];
    var titre = document.createElement("h1");
    titre.innerHTML = "Chronique : " + channel.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    document.getElementById("tableau").appendChild(titre);

    var item = channel.getElementsByTagName("item");
    
    for(var i = 0 ; i < item.length ; i++)
    {
        var divItem = document.createElement("div");
        divItem.setAttribute("class","itemList"); // le nom de la classe 
        divItem.addEventListener("click",eventClickedPodcast);
        divItem.id = i;
        
        var h3 = document.createElement("h3");
        h3.innerHTML=item[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;

        var p = document.createElement("p");
        p.innerHTML=item[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;

        var a = document.createElement("a");
        a.href = "#video";
        a.innerHTML=item[i].getElementsByTagName("guid")[0].childNodes[0].nodeValue;

        divItem.appendChild(h3);
        divItem.appendChild(p);
        divItem.appendChild(a);
        document.getElementById("tableau").appendChild(divItem);
    }

    
}

//quand on clique sur une video/audio, on la définit comme source
//on nous met sur le lecteur dès que la vidéo à finit de charger
async function eventClickedPodcast(e)
{
	document.getElementById('lecteur').src = e.target.parentNode.getElementsByTagName("a")[0].innerHTML;
    await document.getElementById('lecteur').play();
    document.getElementById("play").value = 'PAUSE';
    videoPlay = true;
    window.location.hash = "PLAY";
}

