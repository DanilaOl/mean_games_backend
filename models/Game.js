mongoose = require('mongoose')

var game_schema = mongoose.Schema({
    name: String,
    developer: String,
    rating: Number,
    releaseDate: Date
});

module.exports = mongoose.model('game', game_schema);