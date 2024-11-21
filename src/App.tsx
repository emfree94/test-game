// src/App.tsx
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePostTelegramDataMutation } from './features/api/apiSlice'
import { userData } from 'features/response/responseSlice'
import { Outlet } from 'react-router-dom'
import { Navigation } from '@components/Navigation/Navigation'

declare global {
  interface Window {
    Telegram: any
  }
}

export const App = () => {
  const [rawInitData, setRawInitData] = useState<string | null>(null)
  const [postTelegramData, { isLoading, isError, data }] = usePostTelegramDataMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp
      const initData = tg.initData
      setRawInitData(initData)

      postTelegramData(initData)
        .unwrap()
        .then((response) => {
          console.log('Response from API:', response)
          dispatch(userData(response.data))
        })
        .catch((error) => {
          console.error('Error during POST request:', error)
        })
    }
  }, [dispatch, postTelegramData])

  return (
    <div>
      <button onClick={() => window.Telegram.WebApp.close()}>Close</button>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  )
}
