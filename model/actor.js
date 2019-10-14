const moongose = require('mongoose');
const Schema = moongose.Schema;

const ActorSchema = Schema({
    name: String,
    age: Number
});

module.exports = moongose.model('Actor', ActorSchema);