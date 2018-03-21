var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });
var url = 'http://localhost:8080';
nightmare

  .goto(url)
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

// only works if you open up two bashes ... one to run server.js and the other two run npm test
// if we want it do DO something when it opens the page we should talk about that 