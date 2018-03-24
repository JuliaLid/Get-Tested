

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


$(document).ready(function(){
//Callback
 getAllTests();

 function getAllTests() {
            console.log("I'm a triggered on redirect");
            $.get("/api/tests", function(result) {

              var tests = [];
                for (var j = 0; j<result.length; j++){
                    tests.push(showTests(result[j]));
                    //for testing loop
                    console.log(result[j]);
                }
                var header = $("<h4>").text("Available tests include:");
                header.prependTo(".collapsible");

                $("#results").append(tests);
             
                console.log("line 69 :",result); //this came from user-api line 102
            });
            
         };

        function showTests(result) {
            // var newTest = $("<div>");
            
            // newTest.append("<h5>" + testData.test_name + "</h5>");
            // newTest.append("<p>" + testData.test_explanation + "</p>");
            // newTest.append("</div>");
           var id = result.id;
           var testName = result.test_name;
           var testDescription = result.test_explanation;
           
           var accordionCard = $("<div>").addClass("collapsible-header blueresults");
           var accordionHeader = $("<i>").addClass("material-icons");
           var accordionBody = $("<div>").addClass("collapsible-body lightresults");
           /*var accordionLink = $("<a>").attr({
            "class": "card-link",
            "data-toggle": "collapse",
            "href":"#collapse"+ id
        });*/
        accordionHeader.text(testName);
        accordionBody.appendTo(accordionHeader);
        
        
        /*var accordionBody2= $("<div>").attr({
            "id": "collapse"+id,
            "class": "collapse",
            "data-parent": "#accordion"
        });*/


        var accordionBodyText = $("<div>").addClass("collapsible-body lightresults");
            accordionBodyText.text(testDescription);
        accordionBodyText.appendTo(accordionBody);

        accordionCard.append(accordionHeader).append(accordionBody);

        

            return accordionCard;
          }

 
});