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

 
  app.post("/survey", function(req, res) {

   console.log(req.body);
    db.user.create({
      gender_identity: req.body.gender_identity,
      partner_identity: req.body.partner_identity,
      last_sex: req.body.last_sex,
      multiple_partners: req.body.multiple_partners,
      sex_act: req.body.sex_act,
      last_test: req.body.last_test,
      symptoms: req.body.symptoms,
      burning: req.body.burning,
      itching: req.body.itching,
      discharge: req.body.discharge,
      pain: req.body.pain,
      flu_symptoms: req.body.flu_symptoms
      
    })
    .then(function(result) {
      res.json(result);
    });
    
  });

  
};
