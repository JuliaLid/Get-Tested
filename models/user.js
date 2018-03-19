module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
    	gender_identity: {
    		type: Sequelize.ENUM,
    		values: ['Male', 'Female', 'Trans-female', 'Trans-male']
    	},
    	partner_identity: {
    		type: Sequelize.ENUM,
    		values: ['Male', 'Female', 'Trans-female', 'Trans-male']
    	},
    	last_sex: {
    		type: Sequelize.ENUM,
    		values: ['< week', '1 week - 3 months', '> 3 months']
    	},
    	multiple_partners: {
    		type: Sequelize.BOOLEAN
    	},
    	sex_act: {
    		type: Sequelize.ENUM,
    		values: ['Oral', 'Anal', 'Vaginal']
    	},
    	last_test: {
    		type: Sequelize.ENUM,
    		values: ['< 12 months', '> 12 months', 'never']
    	},
    	symptoms: {
    		type: Sequelize.BOOLEAN
    	},
    	burning: {
    		type: Sequelize.BOOLEAN
    	},
    	itching: {
    		type: Sequelize.BOOLEAN
    	},
    	discharge: {
    		type: Sequelize.BOOLEAN
    	},
    	pain: {
    		type: Sequelize.BOOLEAN
    	},
    	flu_symptoms: {
    		type: Sequelize.BOOLEAN
    	}
    	
    });

    User.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    User.belongsTo(models.StdTest, {
      foreignKey: {
        allowNull: false
      }
    });
  };


    
    
    //sequelize model for the stdtest database goes here
    //current db name is stdtest_db

    return User;
  };