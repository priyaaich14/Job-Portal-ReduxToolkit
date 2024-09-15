import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, updateProfile } from './profileSlice';
import { toast } from 'react-toastify';

const Profile = () => {
  const dispatch = useDispatch();
  const { profile, isLoading, isError, message } = useSelector(
    (state) => state.profile
  );

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const handleUpdate = async () => {
    try {
      await dispatch(updateProfile(profile)).unwrap();
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  if (isError) {
    return <div>{message}</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <label>Name: </label>
        <input type="text" value={profile.name} disabled />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" value={profile.email} disabled />
      </div>
      <div>
        <label>Experience: </label>
        <input
          type="text"
          value={profile.profile.experience || ''}
          onChange={(e) =>
            dispatch(updateProfile({ ...profile, profile: { experience: e.target.value } }))
          }
        />
      </div>
      <button onClick={handleUpdate} className="btn">
        Update Profile
      </button>
    </div>
  );
};

export default Profile;
