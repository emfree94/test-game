// src/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const putSlice = createApi({
  reducerPath: 'put',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.chuvachi.online/api',
    prepareHeaders: (headers) => {
      // Додаємо токен авторизації, якщо він є в стані (state)
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    updateAccountName: builder.mutation({
      query: ({ name, email, phone }) => ({
        url: '/account',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          name,
          email,
          phone,
        },
      }),
    }),
  }),
})

export const { useUpdateAccountNameMutation } = putSlice
