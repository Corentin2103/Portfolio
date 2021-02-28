var popCovoit = document.getElementById('popCovoit');
var popComb = document.getElementById('popCombava');
var popConstruct = document.getElementById('popConstruct');
var popNode = document.getElementById('popNode');
var popvideo = document.getElementById('popvideo');
var body = document.getElementsByClassName('block');
function popupCovoit(){
  fermer();
  popCovoit.style.display = "block";
}
function popupComb(){
  fermer();
  popComb.style.display = "block";
}
function popupCons(){
  fermer();
  popConstruct.style.display = "block";
}
function popupNode(){
  fermer();
  popNode.style.display = "block";
}
function popupVid(){
  fermer();
  popvideo.style.display = "block";
}
function fermer(){
  popCovoit.style.display = "none";
  popComb.style.display = "none";
  popvideo.style.display = "none";
  popNode.style.display = "none";
  popConstruct.style.display = "none";
}
