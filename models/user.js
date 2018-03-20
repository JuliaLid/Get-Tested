module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
    	
    	gender: {
    		type: Sequelize.STRING
    	},
        sexType1: {
            type: Sequelize.STRING
        },
        sexType2: {
            type: Sequelize.STRING
        },
    	sexType3: {
    		type: Sequelize.STRING
    	},
    	sexType4: {
    		type: Sequelize.STRING
    	},
    	sexType5: {
    		type: Sequelize.STRING
    	},
    	sexType6: {
    		type: Sequelize.STRING
    	}
    	
    });

    User.associate = function(models) {
    
    User.belongsTo(models.StdTest, {
      foreignKey: {
        allowNull: false
      }
    });
  };


    return User;
  };