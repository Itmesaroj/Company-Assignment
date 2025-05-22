const db = require('../config/fiber');

exports.requestRide = async (req, res) => {
  try {
    const { userId, pickup, drop, timestamp } = req.body;

    if (!userId || !pickup || !drop || !timestamp) {
      return res.status(400).json({ success: false, message: 'Missing fields' });
    }

    const rideData = {
      userId,
      pickup,
      drop,
      timestamp,
      status: 'requested'
    };

    await db.collection('rideRequests').add(rideData);

    res.status(200).json({ success: true, message: 'Ride requested', ride: rideData });
  } catch (error) {
    console.error('Error requesting ride:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
