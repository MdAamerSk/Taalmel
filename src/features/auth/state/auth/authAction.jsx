import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosInstance} from '../../../../config/axiosInstance';

export const loginEmployee = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
        let res = await axiosInstance.post('/auth/login', credentials);
        console.log(res.data);
        return res.data.data; 
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }   
    }
);

export const currentLoggedEmployee = createAsyncThunk(
  'auth/me',
  async (_, thunkApi) => {
    try {
        let res = await axiosInstance.get('/auth/me');
        console.log(res.data);
        return res.data.user;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }   
    }
);