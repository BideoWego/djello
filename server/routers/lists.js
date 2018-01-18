const express = require('express');
const router = express.Router();
const {
  List,
  Card,
  sequelize
} = require('../models');


// ----------------------------------------
// Create
// ----------------------------------------
router.post('/', async (req, res, next) => {
  try {
    const listParams = {
      name: req.body.list.name,
      boardId: req.body.list.boardId
    };
    let list = await List.create(listParams);
    list = await List.findById(list.id, { include: Card });
    res.json(list);
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
    const list = await List.findById(req.params.id, options);

    await Card.destroy(
      { where: { listId: req.params.id } },
      options
    );

    await List.destroy(
      { where: { id: req.params.id } },
      options
    );
    await transaction.commit();

    res.json(list);
  } catch (e) {
    await transaction.rollback();
    next(e);
  }
});


module.exports = router;
