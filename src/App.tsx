import React from 'react'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { usePostTelegramDataMutation } from 'features/api/apiSlice'
import { useDispatch } from 'react-redux'
import { userData } from 'features/response/responseSlice'
import { Navigation } from '@components/navigation/Navigation'
import { useGetAccountBalanceQuery } from '@features/api/putSlice'
import { setBalances } from '@features/response/balanceSlice'

declare global {
  interface Window {
    Telegram: any
  }
}

export const App = () => {
  const [postTelegramData, { isLoading, isError, data }] = usePostTelegramDataMutation()
  const { data: balanceData } = useGetAccountBalanceQuery({})
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp
      const initData = tg.initData

      postTelegramData(initData).unwrap()

      dispatch(userData(data.data))
      
      if (balanceData) {
        dispatch(setBalances(balanceData?.data?.balances || {}))
      }
    }
  }, [dispatch, balanceData, postTelegramData])

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
