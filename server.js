const express = require("express");
const app = express();
const PORT = 3000;
const postsRouter = require('./routers/posts');

app.use(express.static('public'));

app.use('/api/posts', postsRouter)

app.use('/', (req, res) => {
    res.send('Welcome to my blog')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});