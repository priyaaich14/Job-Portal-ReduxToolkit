import User from '../models/User.js';

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile', error });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const updatedProfile = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
    res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error });
  }
};
