const express = require('express');
const router = express.Router();
const { Board } = require('../models');


router.get('/', async (req, res, next) => {
  try {
    const boards = await Board.findAll();
    res.json(boards);
  } catch (e) {
    next(e);
  }
});


module.exports = router;
