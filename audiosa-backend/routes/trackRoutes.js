const express = require('express');
const router = express.Router();
const { getTracks, addTrack } = require('../controllers/trackController');

router.get('/', getTracks);
router.post('/', addTrack);

module.exports = router;
