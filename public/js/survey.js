$(document).ready(function(){

    

    jQuery.noConflict();

    var data = {
        // A labels array that can contain any sort of values
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        // Our series array that contains series objects or in this case series data arrays
        series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
          ]
      };

      var options = {
        width: 600,
        height: 200,
        seriesBarDistance: 15
      };

      var responsiveOptions = [
        ['screen and (min-width: 641px) and (max-width: 1024px)', {
          seriesBarDistance: 10,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value;
            }
          }
        }],
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      
      new Chartist.Bar('.ct-chart', data, options, responsiveOptions);
      

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
                var header = $("<h4>").text("Based on your answers, we recommend the following tests:");
                header.prependTo("#accordion");

                $("#surveyResult").append(userTests);
              }); 
        }

        function createTestDisplay(testData) {
            // var newTest = $("<div>");
            
            // newTest.append("<h5>" + testData.test_name + "</h5>");
            // newTest.append("<p>" + testData.test_explanation + "</p>");
            // newTest.append("</div>");
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