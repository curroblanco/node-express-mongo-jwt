const Movie = require('../model/movie');

exports.list = async () => {
    return await Movie.find();
}

exports.find = async (movieId) => {
    return await Movie.findById(movieId);
}

exports.insert = async (movie) => {
    return await Movie.create({
        name: movie.name,
        author: movie.author,
        actors: movie.actors
    });

}

exports.update = async (id, movie) => {
    return await Movie.findByIdAndUpdate(id, movie, (err, movie) => {
        });
}

exports.delete = async (movieId) => {
    return await Movie.remove({
        _id: movieId
    });
}