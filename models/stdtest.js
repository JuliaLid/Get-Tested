module.exports = function(sequelize, DataTypes) {
    var StdTest = sequelize.define("StdTest", {
    	test_name: {
    		type: Sequelize.ENUM,
    		values: ['Throat Swab', 'RectalSwab', 'UrethralSwab', 'UrineSample', 'PAPSmear', 'AnalPAP', 'BloodDraw', 'FingerStick', 'VisualExam']
    	},
    	multiple_partners: {
    		type: Sequelize.BOOLEAN
    	},
    	sex_act: {
    		type: Sequelize.ENUM,
    		values: ['Oral', 'Anal', 'Vaginal']
    	},
    	symptoms: {
    		type: Sequelize.BOOLEAN
    	},
    	Gonorrhea: {
    		type: Sequelize.BOOLEAN
    	},
    	Chlamydia: {
    		type: Sequelize.BOOLEAN
    	},
    	HIV: {
    		type: Sequelize.BOOLEAN
    	},

    });
    
    //sequelize model for the stdtest database goes here
    //current db name is stdtest_db

    return StdTest;
  };