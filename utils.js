const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function mouseCoordinates(event){

  var xPos= event.clientX;
  
  var yPos= event.clientY;
  return [xPos, yPos];
  
}

function getTotalStats(stats){
  return true;
}