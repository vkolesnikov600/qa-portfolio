const express = require('express');
const router = express.Router();

const controller = require('../controllers/mainController');

router.get('/', controller.getHome);
router.get('/health', controller.getHealth);
router.get('/about', controller.getAbout);

module.exports = router;