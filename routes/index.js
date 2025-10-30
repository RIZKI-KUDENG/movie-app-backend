const route = require('express').Router();
const movieRoute = require('./movie');
const episodeRoute = require('./episode');
const authRoute = require('./auth');

route.use('/movies', movieRoute);
route.use('/episodes', episodeRoute);
route.use('/auth', authRoute);



module.exports = route;