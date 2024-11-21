// File: src/App.tsx
import { Navigation } from '@components/Navigation/Navigation'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { usePostTelegramDataMutation } from './features/apiSlice'

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initialData: string // The raw query string
        close: () => void
      }
    }
  }
}

export const App = () => {
  const [rawInitData, setRawInitData] = useState<string | null>(null)
  const [postTelegramData, { data, error, isLoading }] =
    usePostTelegramDataMutation()

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp
      const initData = JSON.stringify(tg.initialData) // The raw query string
      setRawInitData(initData)

      // Send the raw query string to the API as "initData"
      postTelegramData({ initData })
        .unwrap()
        .then(() => console.log('Data posted successfully'))
        .catch((err) => console.error('Error posting data:', err))
    } else {
      console.error('Telegram WebApp API is not available.')
      setRawInitData(null)
    }
  }, [postTelegramData])

  return (
    <div>
      <div>
        <h3>Raw Init Data (Query String):</h3>
        <pre>{rawInitData || 'Loading...'}</pre>
      </div>
      <div>
        <h3>API Response:</h3>
        {isLoading && <p>Loading...</p>}
        {error && (
          <p style={{ color: 'red' }}>
            Error: {(error as any)?.data?.message || 'Unknown error'}
          </p>
        )}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
      <button
        onClick={() => {
          if (window.Telegram?.WebApp?.close) {
            window.Telegram.WebApp.close()
          } else {
            console.error('Telegram WebApp API is not available.')
          }
        }}
      >
        Close
      </button>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  )
}
