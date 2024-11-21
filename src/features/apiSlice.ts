// File: src/features/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.chuvachi.online/api/' }),
  endpoints: (builder) => ({
    postTelegramData: builder.mutation({
      query: (body: { initData: string }) => ({
        url: 'auth/telegram',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { usePostTelegramDataMutation } = apiSlice;
