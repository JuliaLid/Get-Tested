module.exports = function(sequelize, DataTypes) {
    var StdTest = sequelize.define("StdTest", {
    	test_name: {
    		type: Sequelize.ENUM,
    		values: ['ThroatSwab', 'RectalSwab', 'UrineSample', 'FingerStick']
    	},
    });

    StdTest.associate = function(models) {

    StdTest.hasMany(models.User, {
     // onDelete: "cascade"
    });
  };


    return StdTest;
 
  };