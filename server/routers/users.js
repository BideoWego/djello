const express = require('express');
const router = express.Router();
const { User } = require('../models');


router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json({ users });
  } catch (e) {
    next(e);
  }
});


router.get('/me', async (req, res, next) => {
  try {
    const user = await User.findById(1, { raw: true });
    res.json({ ...user });
  } catch (e) {
    next(e);
  }
});


module.exports = router;
