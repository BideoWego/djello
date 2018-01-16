const express = require('express');
const router = express.Router();
const { Board, List } = require('../models');


// ----------------------------------------
// Index
// ----------------------------------------
router.get('/', async (req, res, next) => {
  try {
    const boards = await Board.findAll();
    res.json(boards);
  } catch (e) {
    next(e);
  }
});


// ----------------------------------------
// Show
// ----------------------------------------
router.get('/:id', async (req, res, next) => {
  try {
    const board = await Board.findById(req.params.id, { include: List });
    res.json(board);
  } catch (e) {
    next(e);
  }
});


module.exports = router;
