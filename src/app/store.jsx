import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import authReducer from '../features/auth/state/auth/authSlice';
export const store = configureStore({
  reducer: {auth: authReducer},
});