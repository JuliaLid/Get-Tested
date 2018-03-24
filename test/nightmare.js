var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });
var url = 'http://localhost:8080';
nightmare

  .goto(url)
  .wait(3000)
  .click("#download-button")
  .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);

});

