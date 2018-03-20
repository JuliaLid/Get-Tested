$(document).ready(function(){

    //add all AJAX calls to capture user's survey info
    //if we add other pages with inputs, we'll need to set up another file 

    jQuery.noConflict();
    //accordion control
    
    //survey.js fucntions
    // Survey.StylesManager.applyTheme("default");

    Survey.Survey.cssType = "bootstrap";
    

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
                    }
                ]
            };

        window.survey = new Survey.Model(json);

        // survey
        //     .onComplete
        //     .add(function (result) {
        //         document
        //             .querySelector('#surveyResult')
        //             .innerHTML = "result: " + JSON.stringify(result.data);
        //     });
        
        $("#surveyElement").Survey({
            model:survey,
            onComplete:sendDataToServer
        });

        function sendDataToServer(survey) {
            // var resultAsString = JSON.stringify(survey.data);
            var sexAnswers;
        
            if (survey.data.sex_female){
                   surveyAnswers =  survey.data.sex_female;
            } else {
                surveyAnswers =  survey.data.sex_male;
            };
   
             var surveyAnswers = {
                 gender:survey.data.gender,
                 sexType: JSON.stringify(surveyAnswers)
             };
      
            $.post("/api/survey",surveyAnswers,function(){
                 window.location= '/result';
            });
        }
});