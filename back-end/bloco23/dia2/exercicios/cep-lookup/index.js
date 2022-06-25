require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

const cepRoute = require('./routes/cepRoute');

const PORT = process.env.API_PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.use('/cep', cepRoute);

app.get('/ping', (_req, res) => res.status(200).json({ message: "pong!" }));