import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jobService from './jobService';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async (_, thunkAPI) => {
  try {
    return await jobService.getJobs();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const fetchApplicants = createAsyncThunk('jobs/fetchApplicants', async (jobId, thunkAPI) => {
  try {
    return await jobService.getApplicants(jobId);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const applyForJob = createAsyncThunk('jobs/applyForJob', async (jobData, thunkAPI) => {
  try {
    return await jobService.applyForJob(jobData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    applicants: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchApplicants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApplicants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.applicants = action.payload;
      })
      .addCase(fetchApplicants.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(applyForJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(applyForJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(applyForJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default jobSlice.reducer;
