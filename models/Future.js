const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Future extends Model {}

Future.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    activity_list: {
      type: DataTypes.STRING
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
    park_id: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'future',
  }
);

module.exports = Future;
