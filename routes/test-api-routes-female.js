var resultsFemale = function(sex_act){
    if (sex_act === "Vaginal"){
      return "UrineSample, FingerStick"
    }
    else if (sex_act === "Giving oral sex to a man"){
      return "ThroatSwab"
    }
    else if (sex_act === "Anal"){
      return "RectalSwab, FingerStick"
    }
    else if(sex_act === "Receiving oral sex"){
      return "UrineSample"
    }
  };
  
  module.exports = resultsFemale;