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

  

  app.post("/api/survey", function(req, res) {

   //Include switch functions here

   db.StdTest.create ({
    test_name: "Throat Swab",
    test_explanation: "Based on your answers, we recommend that you ask your provider for a throat swab. If you are having oral sex (putting a penis in your mouth) then it’s important to look for gonorrhea and chlamydia in the throat because these infections are “site-specific” meaning they only show up where they’re located. In other words, if you have a gonorrhea or chlamydia infection in your throat, it will not show up on a urine test."
  });

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

