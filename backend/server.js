require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const shortid = require('shortid');
const Url = require('./models/url');

const app = express();
const PORT = process.env.PORT || 5000;

// server.js
const allowedOrigins = [
    'http://localhost:5173',
    'https://url-shortener-delta-weld.vercel.app/'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));


app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


app.post('/api/shorten', async (req, res) => {
    const { originalUrl } = req.body;
    const baseUrl = `http://localhost:${PORT}`;

    if (!originalUrl) {
        return res.status(400).json({ error: 'Original URL is required' });
    }

    try {
        let url = await Url.findOne({ originalUrl });

        if (url) {
            return res.json(url);
        }

        const shortCode = shortid.generate();
        const shortUrl = `${baseUrl}/${shortCode}`;

        url = new Url({
            originalUrl,
            shortCode,
            shortUrl,
        });

        await url.save();
        res.json(url);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/:shortCode', async (req, res) => {
    try {
        const url = await Url.findOne({ shortCode: req.params.shortCode });

        if (url) {
            url.clicks++;
            await url.save();
            return res.redirect(url.originalUrl);
        } else {
            return res.status(404).json({ error: 'No URL found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});


app.get('/api/urls', async (req, res) => {
    try {
        const urls = await Url.find().sort({ date: -1 });
        res.json(urls);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});