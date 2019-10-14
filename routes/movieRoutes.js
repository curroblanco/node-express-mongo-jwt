const MovieController = require('../controller/movieController');

const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authentication');

router.use(auth);

router.get('/', async (req, res) => {
    res.send(await MovieController.list());
});

router.get('/:id', async (req, res) => {
    res.send(await MovieController.find(req.params.id));
});

router.post('/', async (req, res) => {
    res.send(await MovieController.insert(req.body));
});

router.put('/:id', async (req, res) => {
    res.send(await MovieController.update(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    res.send(await MovieController.delete(req.params.id))
});

module.exports = router;