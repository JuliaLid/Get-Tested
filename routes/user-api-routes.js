// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

 
  app.post("/api/survey", function(req, res) {

	createTestTable();  
  	var sexType = JSON.parse(req.body.sexType);
  
    db.User.create({
      gender: req.body.gender,
      sexType1: sexType[0],
      sexType2: sexType[1] ,
      sexType3:sexType[2] ,
      sexType4:sexType[3] ,
      sexType5:sexType[4]  ,
      sexType6:sexType[5] 
            
    })
    .then(function(result) {
      console.log(result.dataValues);
       // console.log(res.json(result));
      // res.json(result);
     
      var gender = result.dataValues.gender;
      var sexType1 = result.dataValues.sexType1;
      var sexType2 = result.dataValues.sexType2;
      var sexType3 = result.dataValues.sexType3;
      var sexType4 = result.dataValues.sexType4;
      var sexType5 = result.dataValues.sexType5;
      var sexType6 = result.dataValues.sexType6;
	switch (gender) {
  	case 'Male':
  		if (sexType1 || sexType2 || sexType3 || sexType4 || sexType5 || sexType6 == "Vaginal") {
  			db.StdTest.findAll({
  				where: {
   						 id: 3
 					   }
  			}).then(function(result) {
      			//res.json(result);
      			console.log(JSON.parse(JSON.stringify(result)));
    		});
  		}
    	else if (sexType1 || sexType2 || sexType3 || sexType4 || sexType5 || sexType6 == "Anal sex with a woman") {
  			db.StdTest.findAll({
  				where: {
   						 [Op.or]: [{id: 3}, {id: 4}]
   						 
 					   }
  			}).then(function(result) {
      			//res.json(result);
      			console.log(JSON.parse(JSON.stringify(result)));
    		});
  		}
  		else if (sexType[0] || sexType[1] || sexType[2] || sexType[3] || sexType[4] || sexType[5] == "Giving oral sex to a man") {
  			db.StdTest.findAll({
  				where: {
   						 id:1
 					   }
  			}).then(function(result) {
      			//res.json(result);
      			console.log(result.dataValues);
    		});
  		}
  		else if (sexType[0] || sexType[1] || sexType[2] || sexType[3] || sexType[4] || sexType[5] == "Anal sex with man (top)") {
  			db.StdTest.findAll({
  				where: {
   						 id:3,
   						 id:4
 					   }
  			}).then(function(result) {
      			//res.json(result);
      			console.log(result.dataValues);
    		});
  		}	
  		else if (sexType[0] || sexType[1] || sexType[2] || sexType[3] || sexType[4] || sexType[5] == "Anal sex with man (bottom)") {
  			db.StdTest.findAll({
  				where: {
   						 id:4,
   						 id:2
 					   }
  			}).then(function(result) {
      			//res.json(result);
      			console.log(result.dataValues);
    		});
  		}	
  		else if (sexType[0] || sexType[1] || sexType[2] || sexType[3] || sexType[4] || sexType[5] == "Receiving oral sex") {
  			db.StdTest.findAll({
  				where: {
   						 id:3
 					   }
  			}).then(function(result) {
      			//res.json(result);
      			console.log(result.dataValues);
    		});
  		}	
    	break;
  	case 'Female':
  		if (sexType[0] || sexType[1] || sexType[2] || sexType[3] || sexType[4] || sexType[5] == "Vaginal") {
  			db.StdTest.findAll({
  				where: {
   						 id: 3,
   						 id: 5
 					   }
  			}).then(function(result) {
      			//res.json(result);
      			console.log(result.dataValues);
    		});
  		}
  		else if (sexType[0] || sexType[1] || sexType[2] || sexType[3] || sexType[4] || sexType[5] == "Giving oral sex to a man") {
  			db.StdTest.findAll({
  				where: {
   						 id: 1
 					   }
  			}).then(function(result) {
      			//res.json(result);
      			console.log(result.dataValues);
    		});
  		}
  		else if (sexType[0] || sexType[1] || sexType[2] || sexType[3] || sexType[4] || sexType[5] == "Anal") {
  			db.StdTest.findAll({
  				where: {
   						 id: 2,
   						 id: 5
 					   }
  			}).then(function(result) {
      			//res.json(result);
      			console.log(result.dataValues);
    		});
  		}
  		else if (sexType[0] || sexType[1] || sexType[2] || sexType[3] || sexType[4] || sexType[5] == "Receiving oral sex") {
  			db.StdTest.findAll({
  				where: {
   						 id: 3
 					   }
  			}).then(function(result) {
      			//res.json(result);
      			console.log(result.dataValues);
    		});
  		}
    
    break;
  	default:
    console.log('Sorry, no user input');
}

     
    });
    
  });

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
		{	test_name: "HIV_Male",
			test_explanation: "Based on your answers, we recommend that you ask your provider for a rapid HIV test. Men who have sex with men have a higher risk for HIV. Even if you do not have symptoms, it’s a good idea to get checked at least twice a year. Rapid HIV tests can be as fast as 1 minute and are 99% accurate for any exposure that was over 3 months ago.If you are worried about a possible exposure that occurred in less than 72 hours (3 days) you should talk to your provider about PEP, a medication that prevents HIV if you were exposed. Think morning after pill but for HIV.If you have multiple partners or a partner who is living with HIV, we recommend that you talk to your provider about PrEP, a daily medication that prevents HIV. Think birth control but for HIV."
		},
		{	test_name: "HIV_Female",
			test_explanation: "Based on your answers, we recommend that you ask your provider for a rapid HIV test. While risk for male/female sex and HIV is relatively small in the US, it is still a good idea to get checked at least once a year. If you have multiple partners, you may want to get tested twice a year. Rapid HIV tests can be as fast as 1 minute and are 99% accurate for any exposure that was over 3 months ago.If you are worried about a possible exposure that occurred in less than 72 hours (3 days) you should talk to your provider about PEP, a medication that prevents HIV if you were exposed. Think morning after pill but for HIV. If you have a partner who is living with HIV, we recommend that you talk to your provider about PrEP, a daily medication that prevents HIV. Think birth control but for HIV."
		}]);
	}

};
