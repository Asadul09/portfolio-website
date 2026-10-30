import Profile from '../models/Profile.js';
import { getDBStatus } from '../config/db.js';
import { seedProfile } from '../data/seedData.js';

// @desc    Get portfolio profile information
// @route   GET /api/profile
// @access  Public
export const getProfile = async (req, res) => {
  try {
    if (getDBStatus()) {
      let profile = await Profile.findOne();
      if (!profile) {
        profile = await Profile.create(seedProfile);
      }
      return res.json({ success: true, data: profile, source: 'database' });
    }
    return res.json({ success: true, data: seedProfile, source: 'demo_fallback' });
  } catch (error) {
    console.error('Error fetching profile:', error);
    return res.status(500).json({ success: false, message: 'Server error fetching profile', data: seedProfile });
  }
};

// @desc    Update portfolio profile information
// @route   PUT /api/profile
// @access  Public (or protected)
export const updateProfile = async (req, res) => {
  try {
    if (!getDBStatus()) {
      return res.status(400).json({
        success: false,
        message: 'Database is not connected. Update disabled in fallback mode.',
      });
    }

    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile(req.body);
    } else {
      Object.assign(profile, req.body);
    }
    await profile.save();

    res.json({ success: true, message: 'Profile updated successfully', data: profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
