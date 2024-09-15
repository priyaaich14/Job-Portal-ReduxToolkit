// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import authService from './authService';

// export const registerUser = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
//   try {
//     return await authService.register(userData);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data.message);
//   }
// });

// export const loginUser = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
//   try {
//     return await authService.login(userData);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data.message);
//   }
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     isError: false,
//     isSuccess: false,
//     isLoading: false,
//     message: '',
//   },
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem('user');
//       state.user = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.user = action.payload;
//         localStorage.setItem('user', JSON.stringify(action.payload));
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.user = action.payload;
//         localStorage.setItem('user', JSON.stringify(action.payload));
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       });
//   },
// });
// export const { logout } = authSlice.actions;
// export default authSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import authService from './authService';

// export const registerUser = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
//   try {
//     return await authService.register(userData);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data.message);
//   }
// });

// export const loginUser = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
//   try {
//     return await authService.login(userData);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data.message);
//   }
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: JSON.parse(localStorage.getItem('user')) || null,
//     isError: false,
//     isSuccess: false,
//     isLoading: false,
//     message: '',
//   },
//   reducers: {
//     logout: (state) => {
//       authService.logout();  // Call the logout function from authService
//       state.user = null;
//       state.isError = false;
//       state.isSuccess = false;
//       state.message = '';
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.user = action.payload;
//         localStorage.setItem('user', JSON.stringify(action.payload));
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.user = action.payload;
//         localStorage.setItem('user', JSON.stringify(action.payload));
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       });
//   },
// });
// export const { logout } = authSlice.actions;
// export default authSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

export const registerUser = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    return await authService.register(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const loginUser = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    return await authService.login(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  },
  reducers: {
    logout: (state) => {
      authService.logout();
      state.user = null;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
