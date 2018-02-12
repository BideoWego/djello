const express = require('express');
const router = express.Router();
const {
  JWT_SECRET,
  JWT_ISSUER,
  JWT_AUDIENCE
} = process.env;
const jwt = require('jsonwebtoken');
const { User } = require('../models');


// TODO store session tokens in DB
router.post('/login', async (req, res, next) => {
  try {
    const user = await User.find({ where: { email: req.body.email } });
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // TODO enable bcrypt
    if (user.passwordHash !== req.body.password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE
    });

    return res.json({ token });
  } catch (e) {
    next(e);
  }
});


module.exports = router;
