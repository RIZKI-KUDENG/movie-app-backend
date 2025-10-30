const MovieRoute = require('express').Router();
const MovieController = require('../controllers/movieControllers');

MovieRoute.get('/', MovieController.getMovies);
MovieRoute.get('/:id', MovieController.getMovieById);
MovieRoute.post('/', MovieController.createMovie);
MovieRoute.put('/:id', MovieController.updateMovie);
MovieRoute.delete('/:id', MovieController.deleteMovie);


module.exports = MovieRoute;