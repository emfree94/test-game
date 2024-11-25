// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import responseReducer from '../features/response/responseSlice';
import { apiSlice } from 'features/api/apiSlice';
import { putSlice } from 'features/api/putSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, 
    [putSlice.reducerPath]: putSlice.reducer, 
    userData: responseReducer,               
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(putSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
