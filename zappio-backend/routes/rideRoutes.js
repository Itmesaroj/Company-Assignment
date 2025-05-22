const express = require('express');
const router = express.Router();
const { requestRide } = require('../controllers/rideController');
const authMiddleware = require('../Middleware/authMiddleware');

router.post('/ride-request', authMiddleware, requestRide);
module.exports = router;