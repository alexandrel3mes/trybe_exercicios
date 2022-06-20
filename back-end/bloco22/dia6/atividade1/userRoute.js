const express = require('express');
const router = express.Router();
const randomToken = require('random-token');

const usernameValidation = (req, res, next) => {
  const { username } = req.body;
  if (username.length < 3) {
    res.status(400).json({ message: 'invalid data'})
  } next();
}

const emailValidation = (req, res, next) => {
  const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const { email } = req.body;
  if (!email.match(emailregex)) {
    res.status(400).json({ message: 'invalid data'})
  } next();
}

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 4 || password.length > 8) {
    res.status(400).json({ message: 'invalid data'})
  } next();
}

router.get('/', (_req, res) => {
  res.status(200).json('foi')
});

router.post('/register', usernameValidation, emailValidation, passwordValidation, (req, res) => {
  const { username } = req.body;
  res.status(201).json({ message: `user ${username} was created`})
})

router.post('/login', emailValidation, passwordValidation, (_req, res) => {
  const token = randomToken(12);
  res.status(200).json({ token: `${token}`})
})

module.exports = router;