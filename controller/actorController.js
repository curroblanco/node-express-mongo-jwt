const Actor = require('../model/actor');

exports.list = async () => {
    return await Actor.find();
}

exports.find = async (actorId) => {
    return await Actor.findById(actorId);
}

exports.insert = async (actor) => {
    return await Actor.create({
        name: actor.name,
        age: actor.age
    });
}

exports.update = async (id, actor) => {
    return await Actor.findByIdAndUpdate(id, actor, (err, actor) => {
        });
}

exports.delete = async (actorId) => {
    return await Actor.remove({
        _id: actorId
    });
}