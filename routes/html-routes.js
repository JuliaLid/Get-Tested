
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // survey route loads survey.html
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // result route loads result.html
  app.get("/tests", function(req, res) {
    
    res.sendFile(path.join(__dirname, "../public/tests.html"));

  });

  // resources route loads resources.html
  app.get("/resources", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/resources.html"));
  });
};
