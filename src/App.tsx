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
  const [postTelegramData, {data}] = usePostTelegramDataMutation()
  const { data: balanceData } = useGetAccountBalanceQuery({})
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp
      const initData = tg.initData
      postTelegramData(initData)
        .unwrap()
        .then((response) => {
          dispatch(userData(response.data))
        })
        .catch((error) => {
          console.error('Error during POST request:', error)
        })
    }
  }, [dispatch, postTelegramData])

  useEffect(() => {
    if (balanceData && balanceData.data?.balances) {
      dispatch(setBalances(balanceData.data.balances))
    }
  }, [balanceData, dispatch])

  return (
    <div className="app-wrapper">
      <div className="">{localStorage.getItem('token')}</div>
      <div className="">{JSON.stringify(window.Telegram.WebApp.initData)}</div>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  )
}
