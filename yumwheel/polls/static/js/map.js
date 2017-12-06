var map;
var infowindow;
var pos

  function initMap(){
    geoFindUser();
    pos = {lat:39.7285,lng:-121.8375};
    map = new google.maps.Map(document.getElementById('map'), {
      center: pos,
      zoom: 14
    });
    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: pos,
      radius: 500,
      type: ['restaurant']
    }, callback);
  }

  function callback(results, status) {
    if(status == google.maps.places.PlacesServiceStatus.OK){
      var rndnum = Math.floor(Math.random() * results.length);
      var place = results[rndnum];
      document.getElementById("resname").innerHTML = place.name;
      var link = "<a href = 'https://wwww.google.com/maps/place?" + place.name +"'> Restaurant Information</a>";
      document.getElementById("reslink").innerHTML = link;
      createMarker(results[rndnum]);
    }
  }

  function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

function geoFindUser(){
  if(!navigator.geolocation){
    return;
  }

  function success(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    pos = {lat:latitude,lng:longitude};
  }
  function error(){
    return;
  }
  navigator.geolocation.getCurrentPosition(success,error);
}
