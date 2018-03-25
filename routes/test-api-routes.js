
// Requiring our models
var db = require("../models");

// Route
// =============================================================
module.exports = function(app) {

//GET route for all tests
  app.get("/api/tests", function(req, res) {
    
    
    db.StdTest.findAll({ })
    .then(function(result) {
      if(result.length ===0) {
        createTestTable(); 
      } 
      res.json(result);
      });
    });

    function createTestTable(){
      var tests =  db.StdTest.bulkCreate ([{
        test_name: "Throat Swab",
        test_explanation: "We recommend that you ask your provider for a throat swab. If you are having oral sex (putting a penis in your mouth,then it’s important to look for gonorrhea and chlamydia in the throat because these infections are “site-specific”, which means that they only show up where they’re located. In other words, if you have a gonorrhea or chlamydia infection in your throat, it will not show up on a urine test."
      },
      {	test_name: "Rectal Swab",
        test_explanation: "We recommend that you ask your provider for a rectal swab. If you are having anal sex (putting a penis in your butt) then it’s important to look for gonorrhea and chlamydia in the throat because these infections are “site-specific”, which means that they only show up where they’re located. In other words, if you have a gonorrhea or chlamydia infection in your throat, it will not show up on a urine test."
      },
      {	test_name: "Urine Sample",
        test_explanation: "We recommend that you ask your provider for a urine test to check for gonorrhea and chlamydia. Even if you are not having symptoms, it’s important to check for these STIs because the most common symptom is no symptom."
      },
      {	test_name: "HIV MSM",
        test_explanation: "We recommend that you ask your provider for a rapid HIV test. Men who have sex with men have a higher risk for HIV. Even if you do not have symptoms, it’s a good idea to get checked at least twice a year. Rapid HIV tests can be as fast as 1 minute and are 99% accurate for any exposure that was over 3 months ago.If you are worried about a possible exposure that occurred in less than 72 hours (3 days) you should talk to your provider about PEP, a medication that prevents HIV if you were exposed. Think morning after pill but for HIV.If you have multiple partners or a partner who is living with HIV, we recommend that you talk to your provider about PrEP, a daily medication that prevents HIV. Think birth control but for HIV."
      },
      {	test_name: "HIV",
        test_explanation: "We recommend that you ask your provider for a rapid HIV test. While risk for male/female sex and HIV is relatively small in the US, it is still a good idea to get checked at least once a year. If you have multiple partners, you may want to get tested twice a year. Rapid HIV tests can be as fast as 1 minute and are 99% accurate for any exposure that was over 3 months ago.If you are worried about a possible exposure that occurred in less than 72 hours (3 days) you should talk to your provider about PEP, a medication that prevents HIV if you were exposed. Think morning after pill but for HIV. If you have a partner who is living with HIV, we recommend that you talk to your provider about PrEP, a daily medication that prevents HIV. Think birth control but for HIV."
      }, {	test_name: "Syphilis MSM",
          test_explanation: "We recommend that you ask your provider for a syphilis test. Depending on the clinic you go to, it may be a rapid test or blood draw. Syphilis rates for men who have sex with men are increasing in the US every year, so it’s important to get tested at least twice a year if you are sexually active. Oftentimes symptoms will go unnoticed which is why routine screening is highly recommended.  If you have syphilis, your sex partner(s) should get diagnosed and treated."
      },
      {	test_name: "Syphilis",
        test_explanation: "We recommend that you ask your provider for a syphilis test. Depending on the clinic you go to, it may be a rapid test or blood draw. While risk for male/female sex and syphilis is relatively small in the US, rates have been slowly increasing every year. We recommend that anyone is sexually active get tested at least once a year for syphilis and at every trimester for pregnant mothers. If you have syphilis, your sex partner(s) should get diagnosed and treated."
      },{	test_name: "Human Papillomavirus (HPV)",
        test_explanation: "We recommend asking your provider for an HPV visual exam. HPV is spread during vaginal, anal or oral sex. Anyone who is sexually active can get HPV. You may or may not have symptoms. Symptoms can include small, wart-like bumps in the genital area. In some cases, HPV goes away on its own. Left untreated, some strains can cause cervical cancer in women, and anal cancer in men who have sex with men. Treatment includes freezing warts by liquid nitrogen. If you are under 26 you can get the HPV vaccine at most clinics.  If you have HPV, your sex partner(s) should get diagnosed and treated."
      },{	test_name: "Herpes",
        test_explanation: "Genital herpes is a virus spread by skin-to-skin contact including vaginal, anal and oral sex. Many people have symptoms but others have none. Symptoms range from mild to severe, and usually include one or more blisters on or around the genitals, rectum or mouth. The blisters break and leave painful sores that may take one week or more to heal. A person infected for the first time can also have fever, body aches or swollen glands, and may have more outbreaks in the first year. A person infected for the second time or more may have milder symptoms, and usually doesn’t have a fever. Some people get outbreaks more often than others. Talk to your provider about treatment options for managing outbreaks. If you have herpes, your sex partner(s) should get diagnosed and treated."
      }]);
    }
};




