const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const booksRoute = require('./routes/bookRoute');

app.use(express.json());

app.use('/books', booksRoute);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));