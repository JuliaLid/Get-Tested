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
      
        $("#surveyElement").Survey({
            model:survey,
            onComplete:sendDataToServer,
        });

        //Redirect to the results page after the survey is submitted    
        survey.onComplete.add(function(result) {
            window.location.href = "/result";
            getTestResults();
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
             //old function that works
            // $.post("/api/survey",surveyAnswers,function(){
            //     console.log("I sent data");
            //      window.location.href = '/result';
            // });

            //trying a new callback
            $.post("/api/survey",surveyAnswers)
               
        }


       //Functions to display results!!!!!!!! 
       //This function is called after the survey post.
        function getTestResults() {
            console.log("I'm a triggered on redirect");
            $.get("/api/result", function(data) {
            //   var rowsToAdd = [];
            //   for (var i = 0; i < data.length; i++) {
            //     rowsToAdd.push(createAuthorRow(data[i]));
            //   }
            //   generateTestCards(rowsToAdd);
            //   nameInput.val("");
                console.log(data);
            });
            
         }

         //this function should be called with each data to build the accordion 
        //   function generateTestCards(rows) {
        //     authorList.children().not(":last").remove();
        //     authorContainer.children(".alert").remove();
           
        //   }
        
});