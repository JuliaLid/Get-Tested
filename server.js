var express = require("express");
var bodyParser = require("body-parser");

// Set up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

//Require db
//=============================================================
var db = require("./models");

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/test-api-routes.js")(app);

// Syncing the sequelize models and starting our Express app
// =============================================================
 
db.sequelize.sync().then(function() {    
    app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
