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

  //  console.log(req);
   console.log(req.body);
   console.log(req.body.gender);
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
      console.log(result);
      console.log(res.json(result));
      // res.json(result);
    });
    
  });

  
};
