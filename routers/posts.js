const express = require('express');
const router = express.Router();
const postsList = require('../data/postsList');

// index
router.get('/', (req, res) => {
    res.json(postsList);
});

// show
router.get('/:id', (req, res) => {
    const id = Number(req.params.id)

    const foundPost = postsList.find(post => post.id === id)

    if (!foundPost) {
        return res.status(404).json({
            error: true,
            message: 'Not found'
        })
    }
    res.json(foundPost);
});

// store
router.post('/', (req, res) => {
    res.send('Creazione nuovo post');
});

// update
router.put('/:id', (req, res) => {
    res.send('Modifica del post');
});

// modify
router.patch('/:id', (req, res) => {
    res.send('Piccola modifica del post');
});

// destroy
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)

    const foundPost = postsList.find(post => post.id === id)

    if (!foundPost) {
        return res.status(404).json({
            error: true,
            message: 'Not found'
        })
    }

    postsList.splice(postsList.indexOf(foundPost), 1)

    res.sendStatus(204)
});

module.exports = router