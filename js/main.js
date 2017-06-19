var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(-33.91722, 151.23064),
    mapTypeId: 'roadmap'
  });

  var iconBase = "http://maps.google.com/mapfiles/kml/shapes";
  var icon = {
    bike: {
      icon: iconBase + 'cycling.png'
    }
  };

  var feature = {
      //position: new google.maps.LatLng(-33.91722, 151.23064),
      type: "bike"
    }

  // Create marker (BIKE).
  /*var marker = new google.maps.Marker({
    position: {lat:latitud, lng:longitud},
    icon: icon[feature.type].icon,
    map: map
  });*/

  function buscar(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(found, notFound);
    }
  }

  document.getElementById("findme").addEventListener("click", buscar);
  var latitud, longitud;

  var found = function(posicion){
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;

    var miUbicacion = new google.maps.Marker({
      position: {lat:latitud, lng:longitud},
      animation: google.maps.Animation.DROP,
      map: map, 
      icon: 'http://maps.google.com/mapfiles/kml/shapes/cycling.png'
    });

    map.setZoom(17);
    map.setCenter({lat:latitud, lng:longitud});
  };

  var notFound = function(error){
    alert("No pudimos encontrar tu ubicación");
  }
};
