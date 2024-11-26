// src/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const putSlice = createApi({
  reducerPath: 'put',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.chuvachi.online/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    dynamicPut: builder.mutation({
      query: ({ url, body }) => ({
        url, 
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body, 
      }),
    }),

    getAccountBalance: builder.query({
      query: () => '/account/balance',
    }),
  }),
});

export const { 
  useDynamicPutMutation, 
  useGetAccountBalanceQuery 
} = putSlice;
