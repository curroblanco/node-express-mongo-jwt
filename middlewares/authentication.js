const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    console.log(req.headers.authorization);
    if (req.headers.authorization && jwt.verify(req.headers.authorization.replace('Bearer ', ''), 'SuperSecretKey')) {
      next();
    } else {
      res.status(403).send('User not logged in. Forbidden access.');
    }
  };