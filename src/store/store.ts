// src/store/store.ts
import { accountApiSlice } from '@features/api/accountApiSlice'
import { telegramApiSlice } from '@features/api/telegramApiSlice'
import { configureStore } from '@reduxjs/toolkit'
import balanceReducer from '@features/balance/balanceSlice';
import userReducer from '@features/user/userSlice';

export const store = configureStore({
  reducer: {
    [telegramApiSlice.reducerPath]: telegramApiSlice.reducer,
    [accountApiSlice.reducerPath]: accountApiSlice.reducer,
    userData: userReducer,
    balances: balanceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(telegramApiSlice.middleware)
      .concat(accountApiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
