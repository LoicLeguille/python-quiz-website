var x=document.getElementById("localisation");
var y=document.getElementById("format");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    x.innerHTML="Geolocation not supported by your browser.";
  }
};

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
};

function getFormat() {
  if (window.matchMedia("(orientation: portrait)").matches) {
   y.innerHTML = "you're in PORTRAIT mode";
  }

  if (window.matchMedia("(orientation: landscape)").matches) {
   y.innerHTML = "you're in LANDSCAPE mode";
  }
};

window.onorientationchange = function() {
  navigator.vibrate(500);
};
