import React from 'react'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { usePostTelegramDataMutation } from 'features/api/apiSlice'
import { useDispatch } from 'react-redux'
import { userData } from 'features/response/responseSlice'
import { Navigation } from '@components/navigation/Navigation'
import { useGetAccountBalanceQuery } from '@features/api/putSlice'

declare global {
  interface Window {
    Telegram: any
  }
}

export const App = () => {
  const [postTelegramData, { isLoading, isError, data }] = usePostTelegramDataMutation()
  const { data: balanceData, isLoading: isBalanceLoading, error: balanceError } = useGetAccountBalanceQuery({});
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp
      const initData = tg.initData
      postTelegramData(initData)
        .unwrap()
          dispatch(userData(data.data))
    }
  }, [dispatch, postTelegramData])


  return (
    <div className="app-wrapper">
      <div className="">{localStorage.getItem('token')}</div>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  )
}
