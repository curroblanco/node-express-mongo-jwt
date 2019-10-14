const moongose = require('mongoose');
const Schema = moongose.Schema;

const MovieSchema = Schema({
    name: String,
    author: String,
    actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }]
});

module.exports = moongose.model('Movie', MovieSchema);