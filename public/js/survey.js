$(document).ready(function(){

    jQuery.noConflict();

    //Survey.js functions
    Survey.Survey.cssType = "bootstrap";
    
    //Survey Questions
    var json = {
        questions: [
            {
                type: "radiogroup",
                name: "gender",
                title: "How do you identify your gender?",
                isRequired: true,
                choices: [
                    "Female",
                    "Male"]
            },
            {   type: "checkbox",
                name: "sex_female",
                title: "What type of sex are you having? (check all that apply)" ,
                visibleIf: "{gender}='Female'",
                colCount: 2,
                choices: [
                    "Vaginal",
                    "Anal",
                    "Receiving oral sex",
                    "Giving oral sex to a man"
                ]
            },
            {   type: "checkbox",
                name: "sex_male",
                title: "What type of sex are you having? (check all that apply)" ,
                visibleIf: "{gender}='Male'",
                colCount: 2,
                choices: [
                    "Vaginal",
                    "Receiving oral sex",
                    "Giving oral sex to a man",
                    "Anal sex with a man (top)",
                    "Anal sex with a man (bottom)",
                    "Anal sex with a woman",
                    
                ]
            },{
                type: "radiogroup",
                name: "std_testing",
                title: "When was the last time you got tested for STDs?",
                isRequired: true,
                colCount: 1,
                choices: [
                    "More than a year ago",
                    "Less than a year ago",
                    "I've never been tested"
            ]
            }
        ]
    };
    //Survey model is generated
    window.survey = new Survey.Model(json);
    
    $("#surveyElement").Survey({
        model:survey,
        onComplete:sendDataToServer,
    });

    survey.onComplete.add(function(result) {
        getTestResults();
    });
    //sending results to the controller via POST call
    function sendDataToServer(survey) {
       
        if (survey.data.sex_female){
                surveyAnswers =  survey.data.sex_female;
        } else {
            surveyAnswers =  survey.data.sex_male;
        };

        var surveyAnswers = {
            gender:survey.data.gender,
            sexType: JSON.stringify(surveyAnswers)
        };
     //POST call
    $.post("/api/survey",surveyAnswers)
    .then(function(data) {
        console.log("Line 93", data);
        
        var userTests = [];
        for (var j = 0; j<data.length; j++){
            userTests.push(createTestDisplay(data[j]));
        }
        var header = $("<h4>").text("Based on your answers, we recommend the following tests:");
        header.prependTo("#accordion");

        $("#surveyResult").append(userTests);
        }); 
    }
    //Dynamically generate the accordion with test results 
    function createTestDisplay(testData) {
        var id = testData.id;
        var testName = testData.test_name;
        var testDescription = testData.test_explanation;
        
        var accordionCard = $("<div>").addClass("card");
        var accordionHeader = $("<div>").addClass("card-header");
        var accordionLink = $("<a>").attr({
        "class": "card-link",
        "data-toggle": "collapse",
        "href":"#collapse"+ id
        });
        accordionLink.text(testName);
        accordionLink.appendTo(accordionHeader);
        
        var accordionBody= $("<div>").attr({
            "id": "collapse"+id,
            "class": "collapse",
            "data-parent": "#accordion"
        });

        var accordionBodyText = $("<div>").addClass("card-body");
        
        accordionBodyText.text(testDescription);
        accordionBodyText.appendTo(accordionBody);

        accordionCard.append(accordionHeader).append(accordionBody);

        return accordionCard;
    }
        
       //Functions to display results
       //This function is called after the survey post.
    function getTestResults() {
        $.get("/api/survey", function(result) {
        
            console.log("line 111 :",result); 
        });
    }
});