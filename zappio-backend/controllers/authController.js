const { sendOTP, verifyOtp,  deleteOtp } = require("../utils/otpStore");
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET; 

function isValidPhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

function authSendOtp(req, res) {
  try {
    const { phone } = req.body;

    if (!phone || !isValidPhone(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid phone number format. Please enter the correct phone number.'
      });
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    sendOTP(phone, otp);

    // For testing, we return OTP here. Remove in production.
    res.status(200).json({ success: true, message: 'OTP sent successfully', otp });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

function authverifyOtp(req, res) {
  try {
    const { phone, otp } = req.body;

    if (!phone || !isValidPhone(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid phone number format.'
      });
    }

    if (!otp) {
      return res.status(400).json({
        success: false,
        message: 'OTP is required.'
      });
    }

    const isValid = verifyOtp(phone, otp);

    if (isValid) {
      deleteOtp (phone);

      // Create JWT token with phone number as payload
      const token = jwt.sign({ phone }, SECRET_KEY, { expiresIn: '1h' });

      return res.status(200).json({
        success: true,
        message: 'OTP verified successfully',
        token
      });
    } else {
      return res.status(400).json({
        success: false,
        message: 'Invalid OTP'
      });
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

module.exports = { authSendOtp,authverifyOtp };
