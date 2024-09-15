import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import profileService from './profileService';

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async (_, thunkAPI) => {
  try {
    return await profileService.getProfile();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const updateProfile = createAsyncThunk('profile/updateProfile', async (profileData, thunkAPI) => {
  try {
    return await profileService.updateProfile(profileData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default profileSlice.reducer;
