import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Balances {
  'silver-coins': {
    name: string;
    balance: string;
  };
  'golden-coins': {
    name: string;
    balance: string;
  };
}

interface BalanceState {
  balances: Balances | null;
}

const initialState: BalanceState = {
  balances: null,
};

const balanceSlice = createSlice({
  name: 'balances',
  initialState,
  reducers: {
    setBalances: (state, action: PayloadAction<Balances>) => {
      state.balances = action.payload;
    },
  },
});

export const { setBalances } = balanceSlice.actions;
export default balanceSlice.reducer;
