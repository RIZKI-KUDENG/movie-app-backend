const { Movie, Episode } = require("../models");
class movieController {
  static async getMovies(req, res) {
    try {
      const movies = await Movie.findAll({
        include: {
          model: Episode,
          as: "episodes",
        },
      });
      res.json(movies);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async getMovieById(req, res) {
    try {
      const movie = await Movie.findByPk(req.params.id, {
        include: {
          model: Episode,
          as: "episodes",
        },
      });
      res.json(movie);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async createMovie(req, res) {
    try {
      const movie = await Movie.create(req.body);
      res.json(movie);
    } catch {
      res.status(500).send(err);
    }
  }
  static async updateMovie(req, res) {
    try {
      const movie = await Movie.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.json(movie);
    } catch {
      res.status(500).send(err);
    }
  }
  static async deleteMovie(req, res) {
    try {
      const movie = await Movie.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json(movie);
    } catch {
      res.status(500).send(err);
    }
  }
}

module.exports = movieController;
