// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
//  var testRecommendation; //refactor it into a function later
var testArray;

  app.post("/api/survey", function(req, res) {
		var returnedTests;
	//Function to create all tests if needed. It calls a helper function that check whether the test table has been created. If not, it will create it.

		db.StdTest.findAll({})
		.then(function(result) {
			 createTestsList(result);//It's in local scope
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
			
		//switch function to route to male or female functions	
		switch (gender) {
			case "Male":
				testArray = maleResults(allSexTypes);
				break;
		
			case "Female":
			  	testArray = femaleResults(allSexTypes);
			  	break;
		}

		db.StdTest.findAll({
				where:{
					test_name: testArray
				}
			}).then (function(result){
				res.json(result);
			});
		}); //end of sequelize CREATE method
	}); // end of API POST 

	
	//GET function in case we need it.Nick, you can use this
	app.get("/api/result", function(req, res) {
		
		db.StdTest.findAll({
			where:{
				test_name: "Throat Swab"
			}
		})
		.then(function(result) {
			// console.log(result[0].dataValues);
			// return res.json(result[0].dataValues);//apply thi to post
		});
	  });
		
 
 //=============Helper Functions===================
 //function to check if the table with tests has been created
	function createTestsList(result){
		var testsList=[]; 	
		//if it hasn't been create. It will be created and then return the array with all tests
		if(result.length ===0) {
			createTestTable(); 
			var tests=JSON.parse(JSON.stringify(result));
			testsList.push(tests[0].test_name,tests[1].test_name,tests[2].test_name,tests[3].test_name,tests[4].test_name)
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
		return testArray;
	};

	//Function to determine tests needed for a male user
	function femaleResults(allSexTypes){
		var testArray= [];
			//Urine test
			for (var i = 0; i<allSexTypes.length; i++){
				var test1;
				if (allSexTypes[i]==="Vaginal" || allSexTypes[i]=== "Receiving oral sex"){
					test1 = "Urine Sample";
				}
			};
			
			//HIV Male
			for (var i = 0; i<allSexTypes.length; i++){
				var test2;
				if (allSexTypes[i] === "Anal" || allSexTypes[i] === "Vaginal" ){
					test2 = "HIV Female";
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
				if (allSexTypes[i] === "Anal"){
					test4 = "Rectal Swab";
				}
			}
			//push all required tests to the arry and return to switch function
		testArray.push(test1,test2,test3,test4);
		console.log("line 166 :", testArray);
		return testArray;
	};
	//function to create std model if needed
	function createTestTable(){
		var tests =  db.StdTest.bulkCreate ([{
			test_name: "Throat Swab",
			test_explanation: "We recommend that you ask your provider for a throat swab. If you are having oral sex (putting a penis in your mouth,then it’s important to look for gonorrhea and chlamydia in the throat because these infections are “site-specific”, which means that they only show up where they’re located. In other words, if you have a gonorrhea or chlamydia infection in your throat, it will not show up on a urine test."
		},
		{	test_name: "Rectal Swab",
			test_explanation: "We recommend that you ask your provider for a rectal swab. If you are having anal sex (putting a penis in your butt) then it’s important to look for gonorrhea and chlamydia in the throat because these infections are “site-specific”, which means that they only show up where they’re located. In other words, if you have a gonorrhea or chlamydia infection in your throat, it will not show up on a urine test."
		},
		{	test_name: "Urine Sample",
			test_explanation: "We recommend that you ask your provider for a urine test to check for gonorrhea and chlamydia. Even if you are not having symptoms, it’s important to check for these STIs because the most common symptom is no symptom."
		},
		{	test_name: "HIV MSM",
			test_explanation: "We recommend that you ask your provider for a rapid HIV test. Men who have sex with men have a higher risk for HIV. Even if you do not have symptoms, it’s a good idea to get checked at least twice a year. Rapid HIV tests can be as fast as 1 minute and are 99% accurate for any exposure that was over 3 months ago.If you are worried about a possible exposure that occurred in less than 72 hours (3 days) you should talk to your provider about PEP, a medication that prevents HIV if you were exposed. Think morning after pill but for HIV.If you have multiple partners or a partner who is living with HIV, we recommend that you talk to your provider about PrEP, a daily medication that prevents HIV. Think birth control but for HIV."
		},
		{	test_name: "HIV",
			test_explanation: "We recommend that you ask your provider for a rapid HIV test. While risk for male/female sex and HIV is relatively small in the US, it is still a good idea to get checked at least once a year. If you have multiple partners, you may want to get tested twice a year. Rapid HIV tests can be as fast as 1 minute and are 99% accurate for any exposure that was over 3 months ago.If you are worried about a possible exposure that occurred in less than 72 hours (3 days) you should talk to your provider about PEP, a medication that prevents HIV if you were exposed. Think morning after pill but for HIV. If you have a partner who is living with HIV, we recommend that you talk to your provider about PrEP, a daily medication that prevents HIV. Think birth control but for HIV."
		}, {	test_name: "Syphilis MSM",
        test_explanation: "We recommend that you ask your provider for a syphilis test. Depending on the clinic you go to, it may be a rapid test or blood draw. Syphilis rates for men who have sex with men are increasing in the US every year, so it’s important to get tested at least twice a year if you are sexually active. Oftentimes symptoms will go unnoticed which is why routine screening is highly recommended.  If you have syphilis, your sex partner(s) should get diagnosed and treated."
		},
		{	test_name: "Syphilis",
			test_explanation: "We recommend that you ask your provider for a syphilis test. Depending on the clinic you go to, it may be a rapid test or blood draw. While risk for male/female sex and syphilis is relatively small in the US, rates have been slowly increasing every year. We recommend that anyone is sexually active get tested at least once a year for syphilis and at every trimester for pregnant mothers. If you have syphilis, your sex partner(s) should get diagnosed and treated."
		},{	test_name: "Human Papillomavirus (HPV)",
			test_explanation: "We recommend asking your provider for an HPV visual exam. HPV is spread during vaginal, anal or oral sex. Anyone who is sexually active can get HPV. You may or may not have symptoms. Symptoms can include small, wart-like bumps in the genital area. In some cases, HPV goes away on its own. Left untreated, some strains can cause cervical cancer in women, and anal cancer in men who have sex with men. Treatment includes freezing warts by liquid nitrogen. If you are under 26 you can get the HPV vaccine at most clinics.  If you have HPV, your sex partner(s) should get diagnosed and treated."
		},{	test_name: "Herpes",
			test_explanation: "Genital herpes is a virus spread by skin-to-skin contact including vaginal, anal and oral sex. Many people have symptoms but others have none. Symptoms range from mild to severe, and usually include one or more blisters on or around the genitals, rectum or mouth. The blisters break and leave painful sores that may take one week or more to heal. A person infected for the first time can also have fever, body aches or swollen glands, and may have more outbreaks in the first year. A person infected for the second time or more may have milder symptoms, and usually doesn’t have a fever. Some people get outbreaks more often than others. Talk to your provider about treatment options for managing outbreaks. If you have herpes, your sex partner(s) should get diagnosed and treated."
		}]);
	}
};
