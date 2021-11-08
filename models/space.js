'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class space extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      space.belongsTo(models.user)
      space.hasMany(models.story)
    }
  };
  space.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    backgroundColor: {
      type: DataTypes.STRING,
      defaultValue: "#ffffff"
    },
    color: {
      type: DataTypes.STRING,
      defaultValue: "#000000"
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER      
    }
  }, {
    sequelize,
    modelName: 'space',
  });
  return space;
};