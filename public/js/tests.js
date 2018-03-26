
//Google Maps API
var clinics =[
    ["Red Door Services", 44.974529, -93.262505, "525 Portland Ave Street", "Minneapolis, MN","612-543-5555"],
    ["HCMC Positive Care", 44.970922,-93.25964, "915 S 7th Street", "Minneapolis, MN","612-873-9988"],
    ["Youth Link Health and Wellness Clinic",44.976367, -93.28202,"41 N 12th Street", "Minneapolis, MN", "612-252-1200"],
    ["HCMC Brooklyn Center Clinic", 45.07547812, -93.30650393, "6601 Shingle Creek Parkway, Suite 400", "Brooklyn Center, MN", "612-873-6963"],
    ["HCMC Richfield Clinic", 44.88381724, -93.2880008, "790 West 66th Street, Market Plaza", "Richfield, MN", "612-873-6963"],
    ["HCMC East Lake Clinic", 44.94870414, -93.2327232, "2700 East Lake Street, Suite 1100", "Minneapolis, MN", "612-873-6963"],
    ["HCMC Downtown", 44.97328199, -93.26169987, "716 South 7th Street", "Minneapolis, MN", "612-873-6963"],
    ["HCMC Brooklyn Park Clinic", 45.09345831, -93.35579755, "7650 Zane Ave N", "Brooklyn Park, MN", "612-873-6963"],
    ["HCMC Whittier Clinic", 44.95179163, -93.27798838, "2810 Nicollet Ave", "Minneapolis, MN", "612-873-6963"],
    ["HCMC", 44.97210377, -93.26241063, "701 Park Ave", "Minneapolis, MN", "612-873-3000"],
    ["HCMC St. Anthony Village Clinic", 45.01598378, -93.22011031, "2714 Highway 88", "St. Anthony, MN", "612-873-6963"],
    ["HCMC Coordinated Care Center", 44.97075454, -93.2597699, "900 South 8th Street", "Minneapolis, MN", "612-873-6963"],
    ["Parkside Specialty Services Clinic", 44.97057794, -93.26124282, "825 South 8th Street", "Minneapolis, MN", "612-347-6450"],
    ["HCMC Golden Valley Clinic", 44.99755535, -93.35096242, "5653 Duluth Street", "Golden Valley, MN", "612-873-6963"],
    ["North Loop Clinic", 44.98934289, -93.27869508, "800 Washington Ave. N.", "Minneapolis, MN", "612-873-6963"]
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
             icon:pinSymbol("#1e88e5")  
       });
       
       map.setCenter(marker.getPosition());
       
       
       var content = '<div id="info">'+"<h6>" +name +"</h6>" + "<p>" + add1 + "</p>" + "<p>" + add2 + "</p>"+ "<p>" + "<br>"+ phone + "</p>"+ "</div>";     
   
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
	//Function to display all available test via GET AJAX call
	getAllTests();

	function getAllTests() {
		$.get("/api/tests", function(result) {
		var tests = [];
			for (var j = 0; j<result.length; j++){
				tests.push(showTests(result[j]));
			}
			
			$(".collapsible").append(tests);
		
			console.log("line 69 :",result); //this came from user-api line 102
		});
	};

	//function to dynamically generate test results on return from the database
	function showTests(result) {
		
		var id = result.id;
		var testName = result.test_name;
		var testDescription = result.test_explanation;
		
		var cardContainer = $("<li>");

		var accordionCard = $("<div>").addClass("collapsible-header blueresults");

		var materialIcon = $("<i>").addClass("material-icons");
		materialIcon.text("assignment");

		var cardHeader= accordionCard.append(materialIcon).append(testName);

		var accordionBody = $("<div>").addClass
		("collapsible-body lightresults");

		var newSpan = $("<span>");
		newSpan.append(testDescription);
		var fullBody = accordionBody.append(newSpan);

		cardContainer.append(cardHeader).append(fullBody);

		return cardContainer;
	}
});