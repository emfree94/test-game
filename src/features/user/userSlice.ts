import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Notifications {
  email: boolean;
  sms: boolean;
  telegram: boolean;
}

interface Settings {
  language: string;
  sound: boolean;
  vibration: boolean;
  notifications: Notifications;
  timezone: string;
}

interface UserData {
  id: number;
  referrer_id: number | null;
  tg_id: number;
  name: string;
  email: string | null;
  email_verified_at: string | null;
  phone: string | null;
  phone_verified_at: string | null;
  country: string | null;
  avatar: string;
  settings: Settings;
  token: string;
}

interface ResponseState {
  data: UserData | null;
}

const initialState: ResponseState = {
  data: null,
};

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    userData: (state, action: PayloadAction<UserData>) => {
      state.data = action.payload;
      localStorage.setItem('token', state.data.token);
    },
  },
});

export const { userData } = userSlice.actions;
export default userSlice.reducer;
