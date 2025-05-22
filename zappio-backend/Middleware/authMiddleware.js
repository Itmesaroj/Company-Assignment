const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET 

module.exports = async(req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: 'Token missing' });

  try {
    const token = authHeader.split(' ')[1];
    
    const decoded =await jwt.verify(token, SECRET);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
