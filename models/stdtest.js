module.exports = function(sequelize, DataTypes) {
    var StdTest = sequelize.define("StdTest", {
    	test_name: {
    		type: DataTypes.STRING,
      },
      test_description: {
        type: DataTypes.STRING
      }
      
    });

  //   StdTest.associate = function(models) {

  //   StdTest.hasMany(models.User, {
  //    // onDelete: "cascade"
  //   });
  // };


    return StdTest;
 
  };