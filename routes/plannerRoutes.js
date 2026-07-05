const express = require('express');
const router = express.Router();
const plannerController = require('../controllers/plannerController');

router.get('/', plannerController.index);
router.post('/', plannerController.generate);
router.get('/download', plannerController.download);

module.exports = router;
