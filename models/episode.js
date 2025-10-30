"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Episode.belongsTo(models.Movie, { 
        foreignKey: "movieId",
        as: "series"
       });
    }
  }
  Episode.init(
    {
      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: "movies",
            key: "id"
        },
        onDelete: "CASCADE"
      },
      season: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      episode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deskripsi: DataTypes.TEXT,
      durasi: DataTypes.INTEGER,
      video_url: DataTypes.STRING,
      tanggal_rilis: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Episode",
      tableName: "episodes",
    }
  );
  return Episode;
};
