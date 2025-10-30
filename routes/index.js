const route = require('express').Router();
const movieRoute = require('./movie');
const episodeRoute = require('./episode');

route.use('/movies', movieRoute);
route.use('/episodes', episodeRoute);



module.exports = route;