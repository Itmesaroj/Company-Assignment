const otpMap = new Map();

function sendOTP(phone, otp) {
  otpMap.set(phone, otp);
}

function verifyOtp(phone, otp) {
  const storedOtp = otpMap.get(phone);
  return storedOtp === otp;
}

function deleteOtp(phone){
    otpMap.delete(phone)
}

module.exports = { sendOTP, verifyOtp,deleteOtp};
