const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', '*');
    console.log(req.headers.authorization);
    
    if (req.headers.authorization && jwt.verify(req.headers.authorization.replace('Bearer ', ''), 'SuperSecretKey')) {
      next();
    } else {
      res.status(403).send('User not logged in. Forbidden access.');
    }
  };