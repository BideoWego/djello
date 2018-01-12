const express = require('express');
const router = express.Router();


const _boards = [
 { id: 1, name: 'Foo' },
 { id: 2, name: 'Bar' }
];


router.get('/', (req, res) => {
  res.json(_boards);
});


module.exports = router;
