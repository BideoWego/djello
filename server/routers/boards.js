const express = require('express');
const router = express.Router();
const {
  Board,
  List,
  Card,
  sequelize,
  Sequelize: { Op }
} = require('../models');


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
    const board = await Board.findById(req.params.id, {
      include: {
        model: List,
        include: Card
      }
    });
    res.json(board);
  } catch (e) {
    next(e);
  }
});


// ----------------------------------------
// Destroy
// ----------------------------------------
router.delete('/:id', async (req, res, next) => {
  let transaction;
  try {
    transaction = await sequelize.transaction();
    const options = { transaction };
    const board = await Board.findById(req.params.id, options);

    const lists = await List.findAll(
      { where: { boardId: req.params.id } },
      options
    );
    const listIds = lists.map(l => l.id);
    await List.destroy(
      { where: { boardId: req.params.id } },
      options
    );

    const cards = await Card.destroy(
      { where: { listId: { [Op.in]: listIds } } },
      options
    );

    await Board.destroy(
      { where: { id: req.params.id } },
      options
    );
    await transaction.commit();

    res.json(board);
  } catch (e) {
    await transaction.rollback();
    next(e);
  }
});


module.exports = router;