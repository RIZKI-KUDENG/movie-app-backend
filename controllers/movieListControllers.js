const { movie_list, Movie } = require("../models");

class movieListControllers {
  static async getMovieList(req, res) {
    try {
      const userId = parseInt(req.params.id, 10);
      const movieList = await movie_list.findAll({
        where: {
          userId
        },
        include: {
          model: Movie,
          as: "movie",
          attributes: ["id", "title", "image", "tipe_film", "rating"],
        },
      });
      res.status(200).json({
        data: movieList,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async addMovieToList(req, res) {
    try {
      const { id } = req.params;
      const { movieId } = req.body;
      const newMovie = await movie_list.create({
        userId: id,
        movieId: movieId,
      });
      res.status(200).json({
        message: "Movie added to list",
        data: newMovie,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async deleteMovieFromList(req, res) {
    try {
      const { id } = req.params;
      const { movieId } = req.body;
      const deleted = await movie_list.destroy({
        where: {
          userId: id,
          movieId: movieId,
        },
      });
      res.status(200).json({
        message: "Movie deleted from list",
        data: deleted,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
module.exports = movieListControllers;
