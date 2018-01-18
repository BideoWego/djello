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
      },
      order: [
        [List, 'createdAt', 'ASC']
      ]
      // [models.Image, 'updated_at', 'asc]
    });
    res.json(board);
  } catch (e) {
    next(e);
  }
});


// ----------------------------------------
// Create
// ----------------------------------------
router.post('/', async (req, res, next) => {
  try {
    const boardParams = {
      name: req.body.board.name,
      userId: 1
    };
    let board = await Board.create(boardParams);
    board = await Board.findById(board.id, {
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

    await Card.destroy(
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
