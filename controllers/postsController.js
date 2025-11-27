const postsList = require('../data/postsList');

function index(req, res) {
    const tag = req.query.tags
    let filteredMenu = postsList

    if (tag) {
        filteredMenu = postsList.filter(post =>
            post.tags.includes(tag)
        )
    }

    res.json(filteredMenu)

}

function show(req, res) {
    const id = Number(req.params.id)

    const foundPost = postsList.find(post => post.id === id)

    if (!foundPost) {
        return res.status(404).json({
            error: true,
            message: 'Not found'
        })
    }
    res.json(foundPost);
}

function store(req, res) {
    const newPost = {
        id: Date.now(),
        ...req.body
    }

    postsList.push(newPost)

    res.status(201).json(newPost)
}

function update(req, res) {
    res.send('Modifica del post');
}

function modify(req, res) {
    res.send('Piccola modifica del post');
}

function destroy(req, res) {
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
}

module.exports = { index, show, store, update, modify, destroy }