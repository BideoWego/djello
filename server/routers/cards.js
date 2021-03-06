const express = require('express');
const router = express.Router();
const { Card, List, Board } = require('../models');


// ----------------------------------------
// Show
// ----------------------------------------
router.get('/:id', async (req, res, next) => {
  try {
    const card = await Card.findById(req.params.id, {
      include: {
        model: List,
        include: Board
      }
    });
    res.json(card);
  } catch (e) {
    next(e);
  }
});


// ----------------------------------------
// Create
// ----------------------------------------
router.post('/', async (req, res, next) => {
  try {
    const cardParams = {
      name: req.body.card.name,
      listId: req.body.card.listId
    };
    let card = await Card.create(cardParams);
    card = await Card.findById(card.id, { include: List });
    res.json(card);
  } catch (e) {
    next(e);
  }
});


// ----------------------------------------
// Update
// ----------------------------------------
router.put('/:id', async (req, res, next) => {
  try {
    const cardParams = {
      name: req.body.card.name,
      description: req.body.card.description
    };
    await Card.update(cardParams, { where: { id: req.params.id } });
    const card = await Card.findById(req.params.id, { include: List });
    res.json(card);
  } catch (e) {
    next(e);
  }
});


// ----------------------------------------
// Destroy
// ----------------------------------------
router.delete('/:id', async (req, res, next) => {
  try {
    const card = await Card.findById(req.params.id, { include: List });
    await Card.destroy({ where: { id: req.params.id } });
    res.json(card);
  } catch (e) {
    next(e);
  }
});


module.exports = router;
