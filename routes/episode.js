const episodeRoute = require('express').Router();
const episodeController = require('../controllers/episodeController');

episodeRoute.get('/', episodeController.getAllEpisodes);
episodeRoute.get('/:id', episodeController.getEpisodeById);
episodeRoute.post('/', episodeController.createEpisode);
episodeRoute.put('/:id', episodeController.updateEpisode);
episodeRoute.delete('/:id', episodeController.deleteEpisode);

module.exports = episodeRoute;