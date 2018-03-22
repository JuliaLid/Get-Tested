// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
//  var testRecommendation; //refactor it into a function later
var testArray;
var julia = [];
// v testRecommendation;
  app.post("/api/survey", function(req, res) {
		var returnedTests;
	//Function to return all tests. It calls a helper function that check whether the test table has been created. If not, it will create it.
		db.StdTest.findAll({})
		.then(function(result) {
			// var returnTests = createTestsList(result);//It's in local scope
			returnedTests = createTestsList(result);//It's in local scope
			// console.log("All available tests " + returnTests);
		});
		
	//Function to create a User model based on the request that has been passed	
  		var sexType = JSON.parse(req.body.sexType);
  
		db.User.create({
			gender: req.body.gender,
			sexType1: sexType[0],
			sexType2: sexType[1],
			sexType3:sexType[2],
			sexType4:sexType[3],
			sexType5:sexType[4] ,
			sexType6:sexType[5] 
		})
		.then(function(result) {
			var gender = result.dataValues.gender;
			var sexType1 = result.dataValues.sexType1;
			var sexType2 = result.dataValues.sexType2;
			var sexType3 = result.dataValues.sexType3;
			var sexType4 = result.dataValues.sexType4;
			var sexType5 = result.dataValues.sexType5;
			var sexType6 = result.dataValues.sexType6;

			//pushing all se types into array to pass to the swicth function
			var allSexTypes = [];
			allSexTypes.push(sexType1,sexType2,sexType3,sexType4,sexType5,sexType6);
			
			// res.json(result);
		//switch function to route to male or female functions	
		switch (gender) {
			case "Male":
				testArray = maleResults(allSexTypes);
				// console.log(typeof testArray);
				// console.log("I'm the tests that the user needs " + testArray);
				
				break;
		
			// case "female":
			//   	femaleResults();
			//   	break;
		}
	//	WORKING FOR LOOP TO QUERY THE DATABASE
		for (var i = 0; i < returnedTests.length; i++) {
			for (var j = 0; j < testArray.length; j++) {
				if (returnedTests[i] === testArray[j]) {
					db.StdTest.findAll({
						where:{
							test_name: testArray[j]
						}
					})
					.then(function(result) {
					
					console.log("WORKINGGGGGGGGG");
					var testRecommendation =JSON.parse(JSON.stringify(result));
					julia.push(testRecommendation); //!!!Recommended tests are here 
					console.log("line 74 ",julia);
					return julia;					// console.log(typeof testRecommendation);
					});
				}
			}

		}
		console.log("line 81 ", julia);
			// console.log("I'm the tests that the user needs " , testRecommendation);
			// return res.json(result)
			// return res.json(result)
			// res.result;
			
		}); //end of sequelize CREATE method
		
	}); // end of API POST 
	console.log("line 88 " + testArray);
	
	//old function to reference
	app.get("/api/result", function(req, res) {
		// Here we add an "include" property to our options in our findOne query
		// We set the value to an array of the models we want to include in a left outer join
		// In this case, just db.Post
		// console.log("I'm a GET request");
		// console.log("line 95 " + testArray);
		db.StdTest.findAll({
			where:{
				test_name: "Throat Swab"
			}
		})
		.then(function(result) {
			// console.log(result[0].dataValues);
			return res.json(result[0].dataValues);//apply thi to post
		});
	  });
		


 //============================================================================================
 //=============Helper Fucntions==============================================================
 //function to check if the table with tests has been created
	function createTestsList(result){
		var testsList=[]; 	
		//if it hasn't been create. It will be created and then return the array with all tests
		if(result.length ===0) {
			createTestTable(); 
			var tests=JSON.parse(JSON.stringify(result));
			testsList.push(tests[0].test_name,tests[1].test_name,tests[2].test_name,tests[3].test_name,tests[4].test_name)
			return testsList;
		} else {
			var tests=JSON.parse(JSON.stringify(result));
			testsList.push(tests[0].test_name,tests[1].test_name,tests[2].test_name,tests[3].test_name,tests[4].test_name)
			return testsList;
		}
	};

//Function to determine tests needed for a male user
	function maleResults(allSexTypes){
		var testArray= [];
			//Urine test
			for (var i = 0; i<allSexTypes.length; i++){
				var test1;
				if (allSexTypes[i]==="Vaginal" || allSexTypes[i] === "Anal sex with a man (top)"  || allSexTypes[i] === "Receiving oral sex" || allSexTypes[i] === "Anal sex with a woman"){
					test1 = "Urine Sample";
				}
			};
			
			//HIV Male
			for (var i = 0; i<allSexTypes.length; i++){
				var test2;
				if (allSexTypes[i] === "Giving oral sex to a man" || allSexTypes[i] === "Anal sex with a man (bottom)"  || allSexTypes[i] === "Anal sex with a man (top)" || allSexTypes[i] === "Anal sex with a woman"	){
					test2 = "HIV Male";
				}
			}
			//Throat Swab
			for (var i = 0; i<allSexTypes.length; i++){
				var test3;
				if (allSexTypes[i] === "Giving oral sex to a man"){
					test3 = "Throat Swab";
				}
			}
			//Rectal Swab
			for (var i = 0; i<allSexTypes.length; i++){
				var test4;
				if (allSexTypes[i] === "Anal sex with a man (bottom)"  || allSexTypes[i] === "Anal sex with a man (top)"){
					test4 = "Rectal Swab";
				}
			}
			//push all required tests to the arry and return to switch function
		testArray.push(test1,test2,test3,test4);
		console.log("line 166 :" + testArray);
		console.log(typeof testArray);
		return testArray;
	};

	//function to create std model if needed
	function createTestTable(){
		var tests =  db.StdTest.bulkCreate ([{
			test_name: "Throat Swab",
			test_explanation: "Based on your answers, we recommend that you ask your provider for a throat swab. If you are having oral sex (putting a penis in your mouth) then it’s important to look for gonorrhea and chlamydia in the throat because these infections are “site-specific” meaning they only show up where they’re located. In other words, if you have a gonorrhea or chlamydia infection in your throat, it will not show up on a urine test."
		},
		{	test_name: "Rectal Swab",
			test_explanation: "Based on your answers, we recommend that you ask your provider for a rectal swab. If you are having anal sex (putting a penis in your butt) then it’s important to look for gonorrhea and chlamydia in the rectum because these infections are “site-specific” meaning they only show up where they’re located. In other words, if you have a gonorrhea or chlamydia infection in your butt, it will not show up on a urine test."
		},
		{	test_name: "Urine Sample",
			test_explanation: "Based on your answers, we recommend that you ask your provider for a urine test to check for gonorrhea and chlamydia. Even if you are not having symptoms, it’s important to check for these STIs because the most common symptom is no symptom."
		},
		{	test_name: "HIV Male",
			test_explanation: "Based on your answers, we recommend that you ask your provider for a rapid HIV test. Men who have sex with men have a higher risk for HIV. Even if you do not have symptoms, it’s a good idea to get checked at least twice a year. Rapid HIV tests can be as fast as 1 minute and are 99% accurate for any exposure that was over 3 months ago.If you are worried about a possible exposure that occurred in less than 72 hours (3 days) you should talk to your provider about PEP, a medication that prevents HIV if you were exposed. Think morning after pill but for HIV.If you have multiple partners or a partner who is living with HIV, we recommend that you talk to your provider about PrEP, a daily medication that prevents HIV. Think birth control but for HIV."
		},
		{	test_name: "HIV Female",
			test_explanation: "Based on your answers, we recommend that you ask your provider for a rapid HIV test. While risk for male/female sex and HIV is relatively small in the US, it is still a good idea to get checked at least once a year. If you have multiple partners, you may want to get tested twice a year. Rapid HIV tests can be as fast as 1 minute and are 99% accurate for any exposure that was over 3 months ago.If you are worried about a possible exposure that occurred in less than 72 hours (3 days) you should talk to your provider about PEP, a medication that prevents HIV if you were exposed. Think morning after pill but for HIV. If you have a partner who is living with HIV, we recommend that you talk to your provider about PrEP, a daily medication that prevents HIV. Think birth control but for HIV."
		}]);
	}

};
