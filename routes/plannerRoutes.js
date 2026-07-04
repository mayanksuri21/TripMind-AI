const express = require('express');
const router = express.Router();
const plannerController = require('../controllers/plannerController');

router.get('/', plannerController.index);
router.post('/', plannerController.generate);

module.exports = router;
