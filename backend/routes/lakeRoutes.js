const express = require('express');
const router = express.Router();
const {
  getLakes,
  getLake,
  createLake,
  updateLake,
  deleteLake,
} = require('../controllers/lakeController');

router.get('/', getLakes);
router.get('/:id', getLake);
router.put('/:id', updateLake);
router.post('/', createLake);
router.delete('/:id', deleteLake);

module.exports = router;
