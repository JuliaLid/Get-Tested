// function initMap() {
//     var uluru = {lat: 44.9726731, lng: -93.2651067};
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 15,
//       center: uluru
//     });
//     var marker = new google.maps.Marker({
//       position: uluru,
//       map: map
//     });
//   }

  /*
 * declare map as a global variable
 */
var map;
var geocoder;
var markers = new Array();

var address1 = "525 Portland Ave S Minneapolis, MN, USA";
var address2 = "915 S 7th St Minneapolis, MN, USA";
var address3 = "41 N 12th St Minneapolis, MN, USA";

$(document).on('ready', initMap);

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {
      lat: 44.9726731,
      lng: 15-93.2651067
    }
  });
  var geocoder = new google.maps.Geocoder();

  geocodeAddress(address1, geocoder, map);
  geocodeAddress(address2, geocoder, map);
  geocodeAddress(address3, geocoder, map);
}

function geocodeAddress(address, geocoder, resultsMap) {
  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
      markers.push(marker);
    //   updateZoom(resultsMap);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Red Door</h1>'+
            '<div id="bodyContent">'+
            '<p></p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: address1,
          map: map,
          title: 'Red Door'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      

//Adding marker popups

// function updateZoom(resultsMap) {
//   var bounds = new google.maps.LatLngBounds();
//   for (i = 0; i < markers.length; i++) {
//     bounds.extend(markers[i].getPosition());
//   }

//   resultsMap.fitBounds(bounds);
// }

// var infowindow = new google.maps.InfoWindow({
//     content:"Hello World!"
//     });
  
//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.open(map,marker);
//     });


