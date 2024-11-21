var express = require('express');
var router = express.Router();
var Game = require('../models/Game');


router.get('/', (req, res, next) => {
    Game.find()
    .then(games => {
        res.status(200).json({msg: games});
    })
    .catch(err => {
        res.status(500).json({errmsg: err});
    });
});

router.post('/', (req, res, next) => {
    var new_game = new Game({
        name: req.body.name,
        developer: req.body.developer,
        rating: req.body.rating,
        releaseDate: req.body.releaseDate
    });
    new_game.save()
    .then(game => {
        res.status(200).json({msg: game});
    })
    .catch(err => {
        res.status(500).json({errmsg: err});
    });
});

router.put('/', (req, res, next) => {
    Game.findById(req.body._id)
    .then(game => {
        game.name = req.body.name;
        game.developer = req.body.developer;
        game.rating = req.body.rating;
        game.releaseDate = req.body.releaseDate;
        game.save()
        .then(game => {
            res.status(200).json({msg: game});
        })
        .catch(err => {
            res.status(500).json({errmsg: err});
        });
    })
    .catch(err => {
        res.status(500).json({errmsg: err});
    });
});

router.delete('/:id', (req, res, next) => {
    Game.findOneAndDelete({_id: req.params.id})
    .then(game => {
        res.status(200).json({msg: game});
    })
    .catch(err => {
        res.status(500).json({errmsg: err});
    });
});

module.exports = router;