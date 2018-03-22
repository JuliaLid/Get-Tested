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
            console.log("line 65: ", result);
           
            // window.location.href = "/result";
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
            

            //trying a new callback
            $.post("/api/survey",surveyAnswers)
            .then(function(data) {
                console.log("Line 93", data);
               
                var userTests = [];
                for (var j = 0; j<data.length; j++){
                    userTests.push(createTestDisplay(data[j]));
                }

                $("#surveyResult").append(userTests);


              }); 
               
        }

        function createTestDisplay(testData) {
            var newTest = $("<div>");
            // newTest.data("author", authorData);
            newTest.append("<h5>" + testData.test_name + "</h5>");
            newTest.append("<p>" + testData.test_explanation + "</p>");
            newTest.append("</div>");
            // newTr.append("<td> " + authorData.Posts.length + "</td>");
            // newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
            // newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
            // newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
            return newTest;
          }
        

       //Functions to display results!!!!!!!! 
       //This function is called after the survey post.
        function getTestResults() {
            console.log("I'm a triggered on redirect");
            $.get("/api/result", function(result) {
            //   var rowsToAdd = [];
            //   for (var i = 0; i < data.length; i++) {
            //     rowsToAdd.push(createAuthorRow(data[i]));
            //   }
            //   generateTestCards(rowsToAdd);
            //   nameInput.val("");
                console.log("line 111 :",result); //this came from user-api line 102
            });
            
         }

        
        
});