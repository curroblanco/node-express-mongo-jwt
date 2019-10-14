const ActorController = require('../controller/actorController');

const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authentication');

router.use(auth);

router.get('/', async (req, res) => {
    res.send(await ActorController.list());
});

router.get('/:id', async (req, res) => {
    res.send(await ActorController.find(req.params.id));
});

router.post('/', async (req, res) => {
    res.send(await ActorController.insert(req.body));
});

router.put('/:id', async (req, res) => {
    res.send(await ActorController.update(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    res.send(await ActorController.delete(req.params.id))
});

module.exports = router;