const express = require('express');
const {
  getMountains,
  getSingleMountain,
  createMountain,
  updateMountain,
  deleteMountain,
} = require('../controllers/mountainController');

const router = express.Router();

router.get('/', getMountains);
router.get('/:id', getSingleMountain);
router.post('/', createMountain);
router.put('/:id', updateMountain);
router.delete('/:id', deleteMountain);

module.exports = router;
