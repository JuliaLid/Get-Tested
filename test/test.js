var expect = require("chai").expect;
var resultsMale = require("../routes/test-api-routes");
var resultsFemale = require("../routes/test-api-routes");

describe("api routes", function() {
    it("takes a sex act and returns appropriate test priorities", function() {
        expect(resultsMale("Vaginal")).to.equal("UrineSample");
    })
});

describe("api routes", function() {
    it("takes a sex act and returns appropriate test priorities", function() {
        expect(resultsMale("Anal sex with a woman")).to.equal("Urine Sample, FingerStick");
    })
});

//putting & does not work, taking out comma does not work, saying just FingerStick does not work
//Having same issue with any result that has two tests coming back from the array ... not sure what to do will ask TAs


describe("api routes", function() {
    it("takes a sex act and returns appropriate test priorities", function() {
        expect(resultsMale("Giving oral sex to a man")).to.equal("ThroatSwab");
    })
});

describe("api routes", function() {
    it("takes a sex act and returns appropriate test priorities", function() {
        expect(resultsMale("Anal sex with man (top)")).to.equal("FingerStick, UrineSample");
    })
});


describe("api routes", function() {
    it("takes a sex act and returns appropriate test priorities", function() {
        expect(resultsMale("Anal sex with man (bottom)")).to.equal("RectalSwab");
    })
});

describe("api routes", function() {
    it("takes a sex act and returns appropriate test priorities", function() {
        expect(resultsMale("Receiving oral sex")).to.equal("UrineSample");
    })
});

//----------------------------------------------------------------------------------------
//Tests for resultsFemale 

describe("api routes", function() {
    it("takes a sex act and returns appropriate test priorities", function() {
        expect(resultsFemale("Vaginal")).to.equal("UrineSample, FingerStick");
    })
});

describe("api routes", function() {
    it("takes a sex act and returns appropriate test priorities", function() {
        expect(resultsFemale("Giving oral sex to a man")).to.equal("ThroatSwab");
    })
});

describe("api routes", function() {
    it("takes a sex act and returns appropriate test priorities", function() {
        expect(resultsFemale("Anal")).to.equal("Rectabl Swab, FingerStick");
    })
});

describe("api routes", function() {
    it("takes a sex act and returns appropriate test priorities", function() {
        expect(resultsFemale("Receiving oral sex")).to.equal("UrineSample");
    })
});


//bring up to the team --- we need to have 2 Male HIV results - 1 for Male/Female and another for Male/Male

// Also we never really considered if someone has sex w both male and female ... maybe we can figure that out if there's time

