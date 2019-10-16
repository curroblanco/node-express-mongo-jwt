const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const DB_URL = "mongodb://root:root@mongo:27017/movies?authSource=admin&authMechanism=SCRAM-SHA-1";
require('./model/movie');
require('./model/actor');
require('./model/user');

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection;

const app = express();
app.use(bodyParser.json({ type: 'application/json' }));
app.options('*', cors());

const movieRoutes = require('./routes/movieRoutes');
const actorRoutes = require('./routes/actorRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/movies', movieRoutes);
app.use('/actors', actorRoutes);
app.use('/users', userRoutes);

let port = 8090;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});