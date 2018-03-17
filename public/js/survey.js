$(document).ready(function(){

    //add all AJAX calls to capture user's survey info
    //if we add other pages with inputs, we'll need to set up another file 

    jQuery.noConflict();
    Survey.StylesManager.applyTheme("default");


            var json = {
                questions: [
                    {
                        type: "radiogroup",
                        name: "gender",
                        title: "How do you identify your gender?",
                        isRequired: true,
                        colCount: 2,
                        choices: [
                            "Female",
                            "Male",
                            "Trans-Female",
                            "Trans-Male"
                        ]
                    },
                    {
                        type: "checkbox",
                        name: "sex_partner",
                        title: "Whom do you have sex with? (check all that apply)" ,
                        isRequired: true,
                        colCount: 2,
                        choices: [
                            "Female",
                            "Male",
                            "Trans-Female",
                            "Trans-Male"
                        ]
                    },
                    {
                        type: "dropdown",
                        name: "multiple_partners",
                        title: "Do you sleep with multiple partners?",
                        isRequired: true,
                        colCount: 0,
                        choices: [
                            "Yes",
                            "No"
                        ]
                    },
                    {
                        type: "checkbox",
                        name: "sex_type",
                        title: "What type of sex do you have? (check all that apply)" ,
                        isRequired: true,
                        colCount: 2,
                        choices: [
                            "Oral",
                            "Vaginal",
                            "Anal"
                        ]
                    },
                    {
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
                    },
                    {
                        type: "dropdown",
                        name: "symptoms_checker",
                        title: "Do you currently have any symptoms?",
                        isRequired: true,
                        colCount: 0,
                        choices: [
                            "Yes",
                            "No"
                        ]
                    },
                    {
                        type: "checkbox",
                        name: "symptoms",
                        title: "Please check all applicable symptoms" ,
                        visibleIf: "{symptoms_checker}='Yes'",
                        colCount: 2,
                        choices: [
                            "Burning",
                            "Itching",
                            "Discharge",
                            "Pain",
                            "Flu-like symptoms"
                        ]
                    },

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
            var resultAsString = JSON.stringify(survey.data);
        console.log(resultAsString); //send Ajax request to your web server.
        }

});