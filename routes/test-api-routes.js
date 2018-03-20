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

  app.get("/api/results", function(req, res) {

   //Include switch functions here

    db.StdTest.findAll({
      include: [db.User]
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
