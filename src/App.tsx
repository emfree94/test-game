import { Navigation } from '@components/Navigation/Navigation'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

declare global {
  interface Window {
    Telegram: any
  }
}

export const App = () => {
  const [telegramData, setTelegramData] = useState<URLSearchParams | null>(null)

  useEffect(() => {
    if (
      window.Telegram &&
      window.Telegram.WebApp &&
      window.Telegram.WebApp.initData
    ) {
      const initData = window.Telegram.WebApp.initData // Get the data from Telegram
      const params = new URLSearchParams(initData) // Parse URL parameters
      setTelegramData(params) // Save data to state
    }
  }, [])

  console.log(telegramData)

  return (
    <div>
      <main>
        <Outlet />
      </main>
      <Navigation />

      <div>
        {telegramData ? (
          <div>
            <p>User ID: {telegramData.get('id')}</p>
            <p>First Name: {telegramData.get('first_name')}</p>
            <p>Last Name: {telegramData.get('last_name')}</p>
            <p>Username: {telegramData.get('username')}</p>
          </div>
        ) : (
          <p>No Telegram data available.</p>
        )}
      </div>
    </div>
  )
}
