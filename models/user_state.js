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
    }
  };
  user_state.init({
    user_id: DataTypes.INTEGER,
    saved_state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_state',
  });
  return user_state;
};