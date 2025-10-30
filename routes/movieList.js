const movieListRoute = require("express").Router();
const movieListController = require("../controllers/movieListControllers");

movieListRoute.get("/:id", movieListController.getMovieList);
movieListRoute.post("/:id", movieListController.addMovieToList);
movieListRoute.delete("/:id", movieListController.deleteMovieFromList);

module.exports = movieListRoute;