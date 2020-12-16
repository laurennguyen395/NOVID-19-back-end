'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_state extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user_state.belongsTo(models.user)
    }
  };
  user_state.init({
    userId: DataTypes.INTEGER,
    savedState: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_state',
  });
  return user_state;
};