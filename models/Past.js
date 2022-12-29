const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Past extends Model {}

Past.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    travel_month: {
      type: DataTypes.STRING,
    },
    travel_year: {
      type: DataTypes.STRING,
    },
    activity_list: {
      type: DataTypes.STRING,
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lodging: {
      type: DataTypes.STRING,
    },
    companion_info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    park_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'past',
  }
);

module.exports = Past;
