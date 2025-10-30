"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movie_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      movie_list.belongsTo(models.user, {
        foreignKey: "userId",
        as: "user",
      });
      movie_list.belongsTo(models.Movie, {
        foreignKey: "movieId",
        as: "movie",
      });
    }
  }
  movie_list.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "movies",
          key: "id",
        },
        onDelete: "CASCADE",
      }
    },
    {
      sequelize,
      modelName: "movie_list",
      tableName: "movie_lists",
    }
  );
  return movie_list;
};
