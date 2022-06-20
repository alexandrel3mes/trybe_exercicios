const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const userRoute = require('./userRoute');
const teamsRoute = require('./teamsRoute');

app.get('/', (req, res) => {
  res.status(200).json('teste')
})

app.use('/user', userRoute);
app.use('/teams', teamsRoute);

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });