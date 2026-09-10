import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosInstance} from '../../../../config/axiosInstance';

export const loginEmployee = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
        let res = await axiosInstance.post('/auth/login', credentials);
        console.log(res.data);
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }   
    }
);