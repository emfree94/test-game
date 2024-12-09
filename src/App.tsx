import React from 'react'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigation } from '@components/navigation/Navigation'
import { setBalances } from '@features/balance/balanceSlice'
import { userData } from '@features/user/userSlice'
import { useGetAccountBalanceQuery } from '@features/api/accountApiSlice'
import { usePostTelegramDataMutation } from '@features/api/telegramApiSlice'

declare global {
  interface Window {
    Telegram: any
  }
}

export const App = () => {
  const [postTelegramData, { data }] = usePostTelegramDataMutation()
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
    if (balanceData) {
      dispatch(setBalances(balanceData.data.balances))
    }
  }, [balanceData, dispatch])

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
