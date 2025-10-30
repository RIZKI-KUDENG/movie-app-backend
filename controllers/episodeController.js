const {Movie, Episode} = require('../models');

class EpisodeController {
    static async getAllEpisodes(req, res){
        try{
            const episodes = await Episode.findAll({
                include: {
                    model: Movie,
                    as: "series"
                }
            });
            res.status(200).json({
                data: episodes
            })
        }catch{
            res.status(500).send(err);
        }
    }
    static async getEpisodeById(req, res){
        try{
            const episode = await Episode.findByPk(req.params.id, {
                include: {
                    model: Movie,
                    as: "series"
                }
            });
            res.status(200).json({
                data: episode
            })
        }catch (err){
            res.status(500).send(err);
        }
    }
    static async createEpisode(req, res){
        try {
            const {movieId, title, season, episode} = req.body;
            const movie = await Movie.findByPk(movieId);
            if(!movie){
                return res.status(404).json({
                    message: "Movie not found"
                })
            }
            if(movie.tipe_film !== "series"){
                return res.status(400).json({
                    message: "Movie is not a series"
                })
            }
            const newEpisode = await Episode.create(req.body);
            res.status(200).json({
                data: newEpisode
            })
        } catch (err) {
            res.status(500).send(err);
        }
    }
    static async updateEpisode(req, res){
        try {
            const [update] = await Episode.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            if(!update){
                return res.status(404).json({
                    message: "Episode not found"
                })
            }
            res.status(200).json({
                message: "Episode updated"
            })
        }catch(err){
            res.status(500).send(err);
        }
    }
    static async deleteEpisode(req, res){
        try {
            const deleted = await Episode.destroy({
                where: {
                    id: req.params.id
                }
            });
            if(!deleted){
                return res.status(404).json({
                    message: "Episode not found"
                })
            }
            res.status(200).json({
                message: "Episode deleted"
            })
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

module.exports = EpisodeController;