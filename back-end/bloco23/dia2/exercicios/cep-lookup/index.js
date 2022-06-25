require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.API_PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.get('/ping', (_req, res) => res.status(200).json({ "message": "pong!" }));