module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
    	
    	gender: {
        type: DataTypes.STRING,
        allowNull: false
    	},
        sexType1: {
          type: DataTypes.STRING,
          allowNull: true
        },
        sexType2: {
          type: DataTypes.STRING,
          allowNull: true
        },
    	sexType3: {
        type: DataTypes.STRING,
        allowNull: true
    	},
    	sexType4: {
        type: DataTypes.STRING,
        allowNull: true
    	},
    	sexType5: {
        type: DataTypes.STRING,
        allowNull: true
    	},
    	sexType6: {
    		  type: DataTypes.STRING,
          allowNull: true
    	}
    	
    });

      return User;
  };