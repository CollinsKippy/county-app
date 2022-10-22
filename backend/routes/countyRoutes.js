const express = require('express');
const {
  getCounties,
  getCounty,
  createCounty,
  updateCounty,
  deleteCounty,
} = require('../controllers/countyController');

const router = express.Router();

router.get('/', getCounties);
router.get('/:id', getCounty);
router.post('/', createCounty);
router.put('/:id', updateCounty);
router.delete('/:id', deleteCounty);

module.exports = router;
