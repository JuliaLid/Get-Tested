module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
    	
    	male: {
    		type: Sequelize.BOOLEAN
    	},
        female: {
            type: Sequelize.BOOLEAN
        },
        oral_rec: {
            type: Sequelize.BOOLEAN
        },
    	oral_ins: {
    		type: Sequelize.BOOLEAN
    	},
    	vaginal_ins: {
    		type: Sequelize.BOOLEAN
    	},
    	vaginal_rec: {
    		type: Sequelize.BOOLEAN
    	},
    	anal_ins: {
    		type: Sequelize.BOOLEAN
    	},
    	anal_rec: {
    		type: Sequelize.BOOLEAN
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