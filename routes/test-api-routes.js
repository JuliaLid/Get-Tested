// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  
  app.get("/api/survey", function(req, res) {

   //Include switch functions here
//THis is not being called. Table is created 
    db.StdTest.bulkCreate ([{
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
	

    db.StdTest.findAll({
      // include: [db.User]
    }).then(function(result) {
      res.json(result);
    });

  });

  

  app.post("/api/tests", function(req, res) {

   console.log(req.body);
    db.StdTest.create({
      test_name: req.body.test_name,
      multiple_partners: req.body.multiple_partners,
      sex_act: req.body.sex_act,
      symptoms: req.body.symptoms,
      Gonorrhea: req.body.Gonorrhea,
      Chlamydia: req.body.Chlamydia,
      HIV: req.body.HIV
      
    })
    .then(function(result) {
      res.json(result);
    });
    
  });

  
};

//values: ['ThroatSwab', 'RectalSwab', 'UrineSample', 'FingerStick']

var resultsMale = function() {
  if (sex_act === "Vaginal") {
      return UrineSample
  }
  else if (sex_act === "Anal sex with a woman") {
      return UrineSample, FingerStick
  }
  else if (sex_act === "Giving oral sex to a man") {
      return ThroatSwab
  }
  else if (sex_act === "Anal sex with man (top)") {
    return UrineSample, FingerStick
  }
  else if (sex_act === "Anal sex with man (bottom)"){
    return FingerStick, RectalSwab
  }
  else if (sex_act === "Receiving oral sex"){
    return UrineSample
  }
}
var resultsFemale = function(){
  if (sex_act === "Vaginal"){
    return UrineSample, FingerStick
  }
  else if (sex_act === "Giving oral sex to a man"){
    return ThroatSwab
  }
  else if (sex_act === "Anal"){
    return RectalSwab, FingerStick
  }
  else if(sex_act === "Receiving oral sex"){
    return UrineSample
  }
}

