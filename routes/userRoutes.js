const UserController = require('../controller/userController');

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send(await UserController.list());
});

router.get('/:id', async (req, res) => {
    res.send(await UserController.find(req.params.id));
});

router.post('/', async (req, res) => {
    res.send(await UserController.insert(req.body));
});

router.post('/login', async (req, res) => {
    res.send(await UserController.login(req.body));
});

router.put('/:id', async (req, res) => {
    res.send(await UserController.update(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    res.send(await UserController.delete(req.params.id))
});

module.exports = router;