var clinics =[
 ["Red Door Services", 44.974529, -93.262505, "525 Portland Ave Street", "Minneapolis, MN","612-543-5555"],
 ["Hennepin County Medical Center Positive Care", 44.970922,-93.25964, "915 S 7th Street", "Minneapolis, MN","612-873-9988"],
 ["Youth Link Health and Wellness Clinic",44.976367, -93.28202,"41 N 12th Street", "Minneapolis, MN", "612-252-1200"]
];

function initMap() {
  var myOptions = {
    center: new google.maps.LatLng(44.9726731, -93.2651067),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"),
      myOptions);
  setMarkers(map,clinics)
}

function setMarkers(map,clinics){
    var marker;

    for (var i = 0; i < clinics.length; i++) {  
      var name = clinics[i][0];
      var lat = clinics[i][1];
      var long = clinics[i][2];
      var add1 =  clinics[i][3];
      var add2 =  clinics[i][4];
      var phone =  clinics[i][5];

    latlngset = new google.maps.LatLng(lat, long);

    var marker = new google.maps.Marker({  
		  map: map, 
		  title: name,
		  position: latlngset,
		  icon:pinSymbol("#26d2fd")  
    });
    
	map.setCenter(marker.getPosition());
	
	
    var content = '<div id="info">'+"<h5>" +name +"</h5>" + "<p>" + add1 + "</p>" + "<p>" + add2 + "</p>"+ "<p>" + "<br>"+ phone + "</p>"+ "</div>";     

    var infowindow = new google.maps.InfoWindow()

    google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
          infowindow.setContent(content);
          infowindow.open(map,marker);
        };
    })(marker,content,infowindow)); 
  }
}

function pinSymbol(color) {
    return {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#000',
        strokeWeight: 2,
        scale: 1,
   };
}
