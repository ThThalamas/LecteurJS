(function(){

  // Création d'une variable d'id pour différencier les vidéos
  var i = 1;
  var j = 1;
  // On créer une variable qui donne l'état du lecteur
  var videoPlay = false;

  // Fonction d'ajout de vidéos
  document.getElementById("ajouter").addEventListener("click", function() {

    //On récupère le lien de l'url
    var url = document.getElementById("url").value;

    //On récupère le tableau
    var tableau = document.getElementById("tableau");

    //On crée notre tableau avec ses colonnes et lignes
    var tr = document.createElement("tr");
    tr.setAttribute("id", "ligne" + i);

    var td = document.createElement("td");
    td.setAttribute("id", "src" + i);
    td.appendChild(document.createTextNode(url));

    //Ajout de boutons up et down pour modifier l'ordre des éléments
    var td2 = document.createElement("td");
    var btnUp = document.createElement("button");
    var btnDown = document.createElement("button");
    btnUp.setAttribute("type", "button");
    btnUp.setAttribute("class", "btn btn-info");
    btnUp.setAttribute("id", "up" + i);
    btnUp.textContent = "↑";
    td2.appendChild(btnUp);

    btnDown.setAttribute("type", "button");
    btnDown.setAttribute("class", "btn btn-info");
    btnDown.setAttribute("id", "down" + i);
    btnDown.textContent = "↓";
    td2.appendChild(btnDown);

    var td3 = document.createElement("td");
    var btnSuppr = document.createElement("button");
    btnSuppr.setAttribute("type", "button");
    btnSuppr.setAttribute("class", "btn btn-danger");
    btnSuppr.setAttribute("id", "supprimer" + i);
    btnSuppr.innerHTML = "Supprimer";
    td3.appendChild(btnSuppr);

    //On ajoute les colonnes à la ligne
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);

    //On ajoute la ligne au tableau
    tableau.appendChild(tr);


    //On ajoute la première vidéo ajoutée en source
    var video = document.getElementById("lecteur");
    var newsrc = tableau.rows[0].cells[0].textContent;
    if (video.src.textContent == null) {
    video.setAttribute("src", newsrc);
  }

    //Fonction de suppression
   btnSuppr.addEventListener("click", function() {
      var btnId = this.getAttribute("id").substr(9);
      var ligne = document.getElementById("ligne" + btnId);
      ligne.parentNode.removeChild(ligne);
    });

    //Fonction pour le bouton Up
    btnUp.addEventListener("click", function() {
      var btnId = this.getAttribute("id").substr(2);
      var ligne = document.getElementById("ligne" + btnId);
      /* Cela aurait du être réalisé avec l'opérateur previousSibling, je n'ai
      cependant pas réussi à le mettre en place avec mon tableau.
      Je ne savais pas quoi récupérer exactement comme élément et comment
      correctement l'appliqué malgré plusieurs tentatives et l'absence
      de ressources sur internet n'utilisant pas JQuery. */
    });

    //Fonction pour le bouton Down
    btnDown.addEventListener("click", function() {
      var btnId = this.getAttribute("id").substr(4);
      var ligne = document.getElementById("ligne" + btnId);
      /* Cela aurait du être réalisé avec l'opérateur nextSibling, je n'ai
      cependant pas réussi à le mettre en place avec mon tableau.
      Je ne savais pas quoi récupérer exactement comme élément et comment
      correctement l'appliqué malgré plusieurs tentatives et l'absence
      de ressources sur internet n'utilisant pas JQuery. */
    });

    //On incrémente l'ID
    i++;
  });

  //Fonction de modification du bouton Play
  document.getElementById("play").addEventListener("click", function() {

    //On récupère l'élément
    var play = document.getElementById("play");
    var video = document.getElementById("lecteur");
    
    /*Si la valeure du bouton est égale à Play, on lui attribue pause, sinon
    l'inverse, on change également la valeur de la variable videoPlay*/
    var buttonPlay = document.getElementById("play");
	if (videoPlay) {
		video.pause();
		videoPlay = false;
		play.innerHTML='PLAY';
	}
	else {
		video.play();
		videoPlay = true;
		play.innerHTML='PAUSE';
	}
  });

  //Fonction de gestion du volume
  document.getElementById("volume").addEventListener("mousemove", function() {

    //On récupère la valeur du volume
    var volume = document.getElementById("volume").value;

    /*On le fait apparaître lorsque la souris bouge pour que l'utilisateur est
    une parfaite vision de ce qu'il fait*/
    document.getElementById("valVolume").textContent = volume;

    //Réglage du volume
    document.getElementById("lecteur").volume = volume/100;
  });

  //Fonction de passage à la vidéo suivante
    document.getElementById("suivant").addEventListener("click", function() {

    //On recupère les éléments nécessaires
    var video = document.getElementById("lecteur");
    var tableau = document.getElementById("tableau");

    //On crée une nouvelle variable qui prend en paramètre l'URL
    var newsrc = tableau.rows[j].cells[0].textContent;

    //On attribue le nouvel URL à src
    video.setAttribute("src", newsrc);

    //On incrémente pour que suivant passe à la suite
    j++;

  });

})();
