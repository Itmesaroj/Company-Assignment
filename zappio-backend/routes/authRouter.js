const express = require('express');
const router = express.Router();
const { authSendOtp, authverifyOtp } = require('../controllers/authController');

router.post('/send-otp',  authSendOtp);
router.post('/verify-otp', authverifyOtp);
module.exports = router;