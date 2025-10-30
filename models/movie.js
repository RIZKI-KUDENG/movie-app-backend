"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.hasMany(models.Episode, {
        foreignKey: "movieId",
        as: "episodes",
      });
      Movie.hasMany(models.movie_list, {
        foreignKey: "movieId",
      });
    }
  }
  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deskripsi: DataTypes.TEXT,
      tanggal_rilis: DataTypes.DATE,
      durasi: DataTypes.INTEGER,
      image: DataTypes.STRING,
      tipe_film: {
        type: DataTypes.ENUM("movie", "series"),
        allowNull: false,
      },
      rating: DataTypes.DECIMAL,
      age_rating: DataTypes.INTEGER,
      kategori: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
      tableName: "movies",
    }
  );
  return Movie;
};
