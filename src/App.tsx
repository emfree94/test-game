import { Navigation } from '@components/Navigation/Navigation'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

declare global {
  interface Window {
    Telegram: any
  }
}

export const App = () => {
  const [rawInitData, setRawInitData] = useState<string | null>(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp
      const initData = tg.initData
      setRawInitData(initData) // Store initData in state

      // Send the initData via POST request
      const postData = async () => {
        try {
          const response = await fetch('https://api.chuvachi.online/api/auth/telegram', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ initData }), // Send initData as JSON
          })

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
          }

          const data = await response.json()
          setData(data)
          console.log('Response data:', data) // Handle response as needed
        } catch (error) {
          console.error('Error during POST request:', error)
        }
      }

      postData() // Call postData to send the request
    }
  }, [])

  return (
    <div>
      <div>
        <h3>Raw Init Data (JSON):{data}</h3>
        <pre>{JSON.stringify(rawInitData, null, 2)}</pre> {/* Pretty-printing JSON */}
      </div>
      <button onClick={() => window.Telegram.WebApp.close()}>Close</button> {/* Close the Telegram WebApp */}
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  )
}
