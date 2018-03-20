module.exports = function(sequelize, DataTypes) {
    var StdTest = sequelize.define("StdTest", {
    	test_name: {
    		type: DataTypes.STRING,
      },
      test_explanation: {
        type: DataTypes.TEXT
      }
      
    });

  //   StdTest.associate = function(models) {

  //   StdTest.hasMany(models.User, {
  //    // onDelete: "cascade"
  //   });
  // };


    return StdTest;
 
  };