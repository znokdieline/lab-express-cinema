const mongose = require('mongoose');
const Schema = mongose.Schema;

const movieSchema = new Schema ({
    title: String,
    director: String,
    stars: [],
    image: String,
    decription: String,
    showtime: Array,

})

const Movie = mongose.model('Movie', movieSchema);

module.exports = Movie;