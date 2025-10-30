"use strict";
const { hashPassword } = require("../utils/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.movie_list, {
        foreignKey: "userId",
      });
    }
  }
  user.init(
    {
      username: DataTypes.STRING,
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          const hashed = hashPassword(value);
          this.setDataValue("password_hash", hashed);
        },
      },
    },
    {
      sequelize,
      modelName: "user",
      tableName: "users",
    }
  );
  return user;
};
