const route = require('express').Router();
const movieRoute = require('./movie');
const episodeRoute = require('./episode');
const authRoute = require('./auth');
const movieListRoute = require('./movieList');

route.use('/movies', movieRoute);
route.use('/episodes', episodeRoute);
route.use('/auth', authRoute);
route.use('/movielist', movieListRoute);



module.exports = route;