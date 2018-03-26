var expect = require("chai").expect;
var maleResults = require("./functions");
//var maleResults = maleResults;
//var femaleResults = results.femaleResults;

describe("Test type", function() {
    it("Match STD test with sex acts", function() {
        var testArray = ["test1, test2, test3, test4, test5, test6"];
        expect(testArray).to.have.members(["test1"]);
    })
})

// describe("Anal sex male/female", function() {
//     it("takes a sex act and returns appropriate test priorities", function() {
//         expect(resultsMale("Anal sex with a woman")).to.equal("UrineSample, FingerStick");
//     })
// });

// describe("Oral sex to male", function() {
//     it("takes a sex act and returns appropriate test priorities", function() {
//         expect(resultsMale("Giving oral sex to a man")).to.equal("ThroatSwab");
//     })
// });

// describe("Topping", function() {
//     it("takes a sex act and returns appropriate test priorities", function() {
//         expect(resultsMale("Anal sex with man (top)")).to.equal("FingerStick, UrineSample");
//     })
// });


// describe("Bottoming", function() {
//     it("takes a sex act and returns appropriate test priorities", function() {
//         expect(resultsMale("Anal sex with man (bottom)")).to.equal("FingerStick, RectalSwab");
//     })
// });

// describe("Receive oral sex", function() {
//     it("takes a sex act and returns appropriate test priorities", function() {
//         expect(resultsMale("Receiving oral sex")).to.equal("UrineSample");
//     })
// });

// //----------------------------------------------------------------------------------------
// //Tests for resultsFemale 

// describe("Vaginal sex Female", function() {
//     it("takes a sex act and returns appropriate test priorities", function() {
//         expect(resultsFemale("Vaginal")).to.equal("UrineSample, FingerStick");
//     })
// });

// describe("Oral sex give", function() {
//     it("takes a sex act and returns appropriate test priorities", function() {
//         expect(resultsFemale("Giving oral sex to a man")).to.equal("ThroatSwab");
//     })
// });

// describe("Anal sex female/male", function() {
//     it("takes a sex act and returns appropriate test priorities", function() {
//         expect(resultsFemale("Anal")).to.equal("RectalSwab, FingerStick");
//     })
// });

// describe("receive oral sex", function() {
//     it("takes a sex act and returns appropriate test priorities", function() {
//         expect(resultsFemale("Receiving oral sex")).to.equal("UrineSample");
//     })
// });




