const express = require('express');
const router = express.Router();
const { Card } = require('../models');


// ----------------------------------------
// Create
// ----------------------------------------
router.post('/', async (req, res, next) => {
  try {
    const cardParams = {
      name: req.body.card.name,
      listId: req.body.card.listId
    };
    const card = await Card.create(cardParams);
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
    const card = await Card.findById(req.params.id, options);

    await Card.destroy(
      { where: { cardId: req.params.id } },
      options
    );

    res.json(card);
  } catch (e) {
    next(e);
  }
});


module.exports = router;