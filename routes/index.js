const route = require('express').Router();
const movieRoute = require('./movie');

route.use('/movies', movieRoute);



module.exports = route;