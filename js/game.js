let resultatJ = 0;

  function jouePierre(){

  var button = document.getElementById('pierre');
  var imageciseauxJoueur = document.getElementsByClassName('ciseauxJoueur')[0];
  var imagepierreJoueur = document.getElementsByClassName('pierreJoueur')[0];
  var imagefeuilleJoueur = document.getElementsByClassName('feuilleJoueur')[0];
  var imagefeuillePC = document.getElementsByClassName('feuillePC')[0];
  reset();
    imagepierreJoueur.style.display = "block";
    imagefeuillePC.style.display = "block";

    resultatJ += 1;
    document.getElementById('resultat').innerHTML = resultatJ;
  }

  function joueCiseaux(){
    var button = document.getElementById('ciseaux');
    var imageciseauxJoueur = document.getElementsByClassName('ciseauxJoueur')[0];
    var imagepierreJoueur = document.getElementsByClassName('pierreJoueur')[0];
    var imagefeuilleJoueur = document.getElementsByClassName('feuilleJoueur')[0];
    var imagepierrePC = document.getElementsByClassName('pierrePC')[0];
    reset();
      imageciseauxJoueur.style.display = "block";
      imagepierrePC.style.display = "block";
      resultatJ += 1;
      document.getElementById('resultat').innerHTML = resultatJ;
  }

  function joueFeuille(){
    var button = document.getElementById('feuille');
    var imageciseauxJoueur = document.getElementsByClassName('ciseauxJoueur')[0];
    var imagepierreJoueur = document.getElementsByClassName('pierreJoueur')[0];
    var imagefeuilleJoueur = document.getElementsByClassName('feuilleJoueur')[0];
    var imageciseauxPC = document.getElementsByClassName('ciseauxPC')[0];
    var imagepierrePC = document.getElementsByClassName('pierrePC')[0];
    reset();

    imagefeuilleJoueur.style.display = "block";
    imageciseauxPC.style.display = "block";
    resultatJ += 1;
    document.getElementById('resultat').innerHTML = resultatJ;

  }
function reset(){
  var imageciseauxJoueur = document.getElementsByClassName('ciseauxJoueur')[0];
  var imagepierreJoueur = document.getElementsByClassName('pierreJoueur')[0];
  var imagefeuilleJoueur = document.getElementsByClassName('feuilleJoueur')[0];
  var imageciseauxPC = document.getElementsByClassName('ciseauxPC')[0];
  var imagepierrePC = document.getElementsByClassName('pierrePC')[0];
  var imagefeuillePC = document.getElementsByClassName('feuillePC')[0];
  imageciseauxJoueur.style.display = "none";
  imagepierreJoueur.style.display = "none";
  imagefeuilleJoueur.style.display = "none";
  imagepierrePC.style.display = "none";
  imagefeuillePC.style.display = "none";
  imageciseauxPC.style.display = "none";
}
