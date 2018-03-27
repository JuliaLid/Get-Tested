function maleResults(allSexTypes){
    var testArray= [];
        //Urine test
        for (var i = 0; i<allSexTypes.length; i++){
            var test1;
            if (allSexTypes[i]==="Vaginal" || allSexTypes[i] === "Anal sex with a man (top)"  || allSexTypes[i] === "Receiving oral sex" || allSexTypes[i] === "Anal sex with a woman"){
                test1 = "Urine Sample";
            }

            console.log(testArray)
        };


        //HIV Male
        for (var i = 0; i<allSexTypes.length; i++){
            var test2;
            if (allSexTypes[i] === "Giving oral sex to a man" || allSexTypes[i] === "Anal sex with a man (bottom)"  || allSexTypes[i] === "Anal sex with a man (top)" || allSexTypes[i] === "Anal sex with a woman"	){
                test2 = "HIV Male";
            }
        }
        //Throat Swab
        for (var i = 0; i<allSexTypes.length; i++){
            var test3;
            if (allSexTypes[i] === "Giving oral sex to a man"){
                test3 = "Throat Swab";
            }
        }
        //Rectal Swab
        for (var i = 0; i<allSexTypes.length; i++){
            var test4;
            if (allSexTypes[i] === "Anal sex with a man (bottom)"  || allSexTypes[i] === "Anal sex with a man (top)"){
                test4 = "Rectal Swab";
            }
        }
        //push all required tests to the arry and return to switch function
    testArray.push(test1,test2,test3,test4);
    return testArray;
};

//Function to determine tests needed for a male user
function femaleResults(allSexTypes){
    var testArray= [];
        //Urine test
        for (var i = 0; i<allSexTypes.length; i++){
            var test1;
            if (allSexTypes[i]==="Vaginal" || allSexTypes[i]=== "Receiving oral sex"){
                test1 = "Urine Sample";
            }
        };
        
        //HIV Male
        for (var i = 0; i<allSexTypes.length; i++){
            var test2;
            if (allSexTypes[i] === "Anal" || allSexTypes[i] === "Vaginal" ){
                test2 = "HIV Female";
            }
        }
        //Throat Swab
        for (var i = 0; i<allSexTypes.length; i++){
            var test3;
            if (allSexTypes[i] === "Giving oral sex to a man"){
                test3 = "Throat Swab";
            }
        }
        //Rectal Swab
        for (var i = 0; i<allSexTypes.length; i++){
            var test4;
            if (allSexTypes[i] === "Anal"){
                test4 = "Rectal Swab";
            }
        }
        //push all required tests to the arry and return to switch function
    testArray.push(test1,test2,test3,test4);
    console.log("line 166 :", testArray);
    return testArray;
};

module.exports = maleResults;