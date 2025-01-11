const express = require('express');
const {nanoid} = require('nanoid');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const urls = {};
app.post('/shorten', (req, res) => {
    const {originalUrl} = req.body;
    const shortId = nanoid(8);
    const shortUrl = `http://localhost:3000/${shortId}`;
    urls[shortId] = originalUrl;
    console.log(urls);
    res.json({originalUrl, shortUrl});

});

app.get('/:shortId', (req, res) => {
    const originalUrl = urls[req.params.shortId];
    if (!originalUrl) {
        return res.status(404).json({error: 'URL not found'});
    }
    console.log(originalUrl);
    res.redirect(originalUrl);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});