import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.chuvachi.online/api',
  }),
  endpoints: (builder) => ({
    postTelegramData: builder.mutation({
      query: (initData) => ({
        url: '/auth/telegram',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { initData },
      }),
    }),
  }),
});

export const { usePostTelegramDataMutation } = apiSlice;
