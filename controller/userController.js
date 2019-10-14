const User = require('../model/user');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

exports.list = async () => {
    return await User.find();
}

exports.find = async (userId) => {
    return await User.findById(userId);
}

exports.insert = async (user) => {
    return await User.create({
        name: user.name,
        nick: user.nick,
        email: user.email,
        password: bcrypt.hashSync(user.password),
        role: 'User'
    });
}

exports.login = async (user) => {
    let userHash = await User.findOne({
        nick: user.nick
    })
    .select('password role');

    if(bcrypt.compareSync(user.password, userHash.password)) {
        return {
            token: jwt.sign({
                data: {
                    user: user.nick,
                    role: userHash.role,
                    id: user._id
                }
              }, 'SuperSecretKey', { expiresIn: 60 * 60 * 24 * 3650 })
        }
    }
    return bcrypt.compareSync(user.password, userHash.password);
}

exports.update = async (id, user) => {
    return await User.findByIdAndUpdate(id, user, (err, User) => {});
}

exports.delete = async (userId) => {
    return await User.remove({
        _id: userId
    });
}