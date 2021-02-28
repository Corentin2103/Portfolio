let compteur = 0;
var aboutMe = document.getElementsByClassName('presentation')[0];
var parcours = document.getElementsByClassName('parcours')[0];
var actuel = document.getElementsByClassName('actuel')[0];
var precedent = document.getElementsByClassName('reculer')[0];
var pageSuivante = document.getElementsByClassName('suivant')[0];
var accueil = document.getElementsByClassName('accueil')[0];
function suivant(){

  if(compteur == 0 ){
    aboutMe.style.display = "none";
    parcours.style.display = "block";
    precedent.style.display = "block";


  }
  if(compteur == 1 ){



    pageSuivante.style.display = "none";
    parcours.style.display = "none";
    actuel.style.display = "block";

  }
  compteur = compteur+ 1;
}

function reculer(){

  if(compteur == 1 ){
    aboutMe.style.display = "block";
    parcours.style.display = "none";
    precedent.style.display = "none";
    accueil.style.marginLeft= "42.5%";
    pageSuivante.style.display = "block";


  }
  if(compteur == 2 ){
    actuel.style.display = "none";
    parcours.style.display = "block";
    pageSuivante.style.display = "block";
  }
  compteur = compteur - 1;
}
