'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      story.belongsTo(models.space)
    }
  };
  story.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.TEXT
    },
    imageUrl: {
      type: DataTypes.STRING
    },
    spaceId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'story',
  });
  return story;
};